const mongoose = require('mongoose');
const DailyTimeSheet = require('./models/DailyTimeSheet');
const Role = require('./models/Role');
const SecurityQuestion = require('./models/SecurityQuestion');
const User = require('./models/User');
const dbUri = 'mongodb://timesheet_mongodb:27017/timesheet';
const config = require('./config');
// const logger = require('./utils/logger');
mongoose.Promise = global.Promise;
// logger.error('asddsasad');
mongoose.connect(dbUri, {
    useCreateIndex: true,
    useNewUrlParser: true
}, function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database !");
        /* // Clean Up
        User.deleteMany({}, function () {});
        Role.deleteMany({}, function () {});
        SecurityQuestion.deleteMany({}, function () {});
        DailyTimeSheet.deleteMany({}, function () {});*/
        var role_id;
        var securityQuestion_id;
        User
            .find().countDocuments(function (err, count) {
                if(count === 0) {
                    config.roles[0]._id = mongoose.Types.ObjectId(config.roles[0]._id);
                    config.roles[1]._id = mongoose.Types.ObjectId(config.roles[1]._id);
                    config.roles[2]._id = mongoose.Types.ObjectId(config.roles[2]._id);
                    Role.create(config.roles, function (err) {
                        if (err) {
                            console.log('Roles Collections Error', err);
                        } else {
                            console.log('Roles Collections Created');
                            Role
                            .find()
                            .exec(function (err, roles) {
                                if (err) {
                                    console.log('Roles Collections Find Error', err);
                                } else {
                                    role_id = roles[0]._id;
                                    SecurityQuestion.create(config.security_questions, function (err) {
                                        console.log('SecurityQuestion Collections Created');
                                        SecurityQuestion
                                                    .find()
                                                    .exec(function (err, securityQuestion) {
                                                        if (err) {
                                                            console.log('SecurityQuestion Collections Find Error', err);
                                                        } else {
                                                            security_question_id = securityQuestion[0]._id;
                                                            var insertAdmin = config.users.user;
                                                            var defaultId = mongoose.Types.ObjectId(config.users.admin_employee_id_object);
                                                            insertAdmin[0].manager_id = defaultId;
                                                            insertAdmin[0]._id = defaultId; 
                                                            insertAdmin[0].role_id = role_id;
                                                            insertAdmin[0].security_question_id = security_question_id;
                                                            User.create(insertAdmin, function (err) {
                                                                if (err) {
                                                                    console.log('Admin Create error', err);
                                                                } else {
                                                                    console.log('Admin Created');
                                                                    User
                                                                    .find()
                                                                    .exec(function (err, users) {
                                                                        if (err) {
                                                                            console.log('Admin Find Error', err);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                    });
                                }
                            });
                        }
                    });
                }
            });
    }
});
module.exports = mongoose;
