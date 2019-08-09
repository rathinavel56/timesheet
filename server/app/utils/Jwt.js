const expressJwt = require('express-jwt');
const config = require('../config');
const jsonwebtoken = require('jsonwebtoken');
function jwt() {
  const { secret } = config;
  return expressJwt({
    secret: secret,
    credentialsRequired: false,
    getToken: function (req, res) {
      const authorizationHeaader = req.headers.authorization;
      if (authorizationHeaader) {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        try {
          // verify makes sure that the token hasn't expired and has been issued by us
          jsonwebtoken.verify(token, config.secret, function(err, decoded) {
            if (err) {
              res.status(config.httpCode.unAuthorized).send({error: err});
              next();
            } else {
              // Let's pass back the decoded token to the request object
              req.decoded = decoded;
            }
          });          
        } catch (err) {
          // Throw an error just in case anything goes wrong with verification
          result = {
            error: err,
            status: config.httpCode.unAuthorized
          };
          if (res) {
            // res.sendStatus(config.httpCode.unAuthorized);
            res.status(config.httpCode.unAuthorized).send({error: result});
          }
        }
      } else {
        result = {
          error: `Authentication error. Token required.`,
          status: config.httpCode.unAuthorized
        };
        if (res) {
          res.sendStatus(config.httpCode.unAuthorized);
        }
      }
    }
  }).unless({
    path: [
      // public routes that don't require authentication
      {
        url: '/login',
        methods: ['POST']
      },
      {
        url: '/register',
        methods: ['POST']
      },
      {
        url: '/forgot_password',
        methods: ['POST']
      },
      {
        url: '/login',
        methods: ['POST']
      },
      {
        url: '/security_question',
        methods: ['GET', 'POST']
      },
      {
        url: '/managers',
        methods: ['GET']
      },
    ]
  });
}
module.exports = jwt;