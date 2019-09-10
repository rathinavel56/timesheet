const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./utils/Jwt');
const User = require('./controllers/User');
const SecurityQuestion = require('./controllers/SecurityQuestion');
const Dashboard = require('./controllers/Dashboard');
const Role = require('./controllers/Role');
const InfraTower = require('./controllers/InfraTower');
const Project = require('./controllers/Project');
const ProjectInfra = require('./controllers/ProjectInfra');
const DailyTimeSheet = require('./controllers/DailyTimeSheet');
const ExportTimeSheet = require('./controllers/ExportTimeSheet');
const path = require('path');
const allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png',
	'.jpg',
	'.jpeg',
	'.woff2',
	'.woff',
	'.ttf',
	'.svg',
	'.xlsx'
];
router
    .use(express.static('./app/public'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cors())
	.use(function (req, res, next) {
		if (req.url.indexOf('api') === -1) {
			const fileName = req.url.split('.').pop();
			if (allowedExt.indexOf('.' + fileName) === 0) {
			   res.sendFile(path.resolve('./app/public/' + req.url)); 	
			} else {
			   res.sendFile(path.resolve('./app/public/index.html'));	
			}
		} else {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			res.header("Cache-Control", "no-cache, no-store, must-revalidate");
			res.header("Pragma", "no-cache");
			res.header("Expires", 0);
			next();
		}
    })
	//------Common Url Start---//
	//Non Login Routes
    .post('/api/v1/login', User.login)
    //Register
    .post('/api/v1/register', User.register)
    .post('/api/v1/forgot_password', User.forgotPassword)
    .get('/api/v1/security_question', SecurityQuestion.find)    

    //------Common Url End---//

    //------Admin Url Start---//

    //Dashboard
    .get('/api/v1/dashboard', Dashboard.showDetails)

    //Role
    .get('/api/v1/role', Role.find)

    //User
    .get('/api/v1/users', jwt, User.findAll)
    .put('/api/v1/users', jwt, User.update)
    .get('/api/v1/user', jwt, User.findById)
    .put('/api/v1/change_password', jwt, User.change_password)
    .get('/api/v1/managers', User.findAllManagers)

    //InfraTower
    .get('/api/v1/infra_tower', InfraTower.findAll)
    .get('/api/v1/infra_tower/list', InfraTower.findList)
    .post('/api/v1/infra_tower', jwt, InfraTower.create)
    .put('/api/v1/infra_tower', jwt, InfraTower.update)

    //Project
    .get('/api/v1/project', Project.findAll)
    .get('/api/v1/project/list', Project.findList)
    .post('/api/v1/project', jwt, Project.create)
    .put('/api/v1/project', jwt, Project.update)

    //Project-Infra
    .get('/api/v1/projectInfra', jwt, ProjectInfra.findAll)
    .get('/api/v1/projectInfra/list', ProjectInfra.findList)
    .post('/api/v1/projectInfra', jwt, ProjectInfra.create)
    .put('/api/v1/projectInfra', jwt, ProjectInfra.update)

    .post('/api/v1/daily_time_sheet', jwt, DailyTimeSheet.create)
    .get('/api/v1/daily_time_sheet', jwt, DailyTimeSheet.findAll)

    //ExportTimeSheet
    .post('/api/v1/export_time_sheet', jwt, ExportTimeSheet.create);
//------Admin Url End---//   

module.exports = router;
