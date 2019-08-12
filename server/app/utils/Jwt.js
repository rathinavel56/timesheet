const expressJwt = require('express-jwt');
const config = require('../config');
const jwt = require('jsonwebtoken');
var apiVersion = "/api/v1";
const jwtCheck = (req, res, next) => {
  var expectionUrl = [
    {
      url: apiVersion + '/login',
      method: ['POST']
    },
    {
      url: apiVersion + '/register',
      method: ['POST']
    },
    {
      url: apiVersion + '/forgot_password',
      method: ['POST']
    },
    {
      url: apiVersion + '/security_question',
      method: ['GET']
    },
    {
      url: apiVersion + '/managers',
      method: ['GET']
    },
    {
      url: apiVersion + '/infra_tower',
      method: ['GET']
    },
    {
      url: apiVersion + '/infra_tower/list',
      method: ['GET']
    },
    {
      url: apiVersion + '/project',
      method: ['GET']
    },
    {
      url: apiVersion + '/project/list',
      method: ['GET']
    }
  ];

  var adminUrl = [
    {
      url: apiVersion + '/dashboard',
      method: ['GET']
    },
    {
      url: apiVersion + '/role',
      method: ['GET']
    },
    {
      url: apiVersion + '/users',
      method: ['GET']
    },
    {
      url: apiVersion + '/infra_tower',
      method: ['POST', 'PUT']
    },
    {
      url: apiVersion + '/project',
      method: ['POST', 'PUT']
    },
    {
      url: apiVersion + '/projectInfra',
      method: ['POST', 'PUT']
    },
    {
      url: apiVersion + '/export_time_sheet',
      method: ['POST']
    }
  ];
  var currentUrl = req.url.split('?');
  var accessMethod = req.method;
  currentUrl = currentUrl[0];
  var isExpectionUrl = expectionUrl.filter(function(element){
    return (element.url === currentUrl && element.method.indexOf(accessMethod));
  });
  if (isExpectionUrl.length > 0) {
    next();
  } else {
      const authorizationHeaader = req.headers.authorization;
      if (authorizationHeaader) {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        try {
          // verify makes sure that the token hasn't expired and has been issued by us
          jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
              res.status(config.httpCode.unAuthorized).send({error: err});
            } else {
              // Let's pass back the decoded token to the request object
              req.decoded = decoded;
              if (req.decoded.role_id !== config.roles[0]._id) {
                var isAdminUrl = adminUrl.filter(function(element) {
                  return (element.url === currentUrl && element.method.indexOf(accessMethod) > -1);
                });
                if (isAdminUrl.length > 0) {
                  res.status(config.httpCode.unAuthorized).send({ message: 'Invalid Token' });        
                } else {
                  next();
                }      
              } else {
                next();
              }
            }
          });          
         } catch (err) {
          // Throw an error just in case anything goes wrong with verification
          res.status(config.httpCode.unAuthorized).send({ message: err });
        }
      } else {
        res.status(config.httpCode.unAuthorized).send({ message: 'Invalid Token' });
      }
  }
};
module.exports = jwtCheck;