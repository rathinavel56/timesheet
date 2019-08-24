const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoError = 'MongoError';
const config = require('../config');
const jsonwebtoken = require('jsonwebtoken');
const saltRounds = 10;

exports.login = function (req, res) {
    try {
        if (req.body) {
            if (req.body.employee_id !== undefined) {
                User
                    .findOne({
                        employee_id: req.body.employee_id
                    })
                    .populate('role', '_id name')
                    .exec(function (err, userInfo) {
                        if (err) {
                            res.status(config.httpCode.internalServerError).json({
                                error: err
                            });
                        } else {
                            if (!userInfo.is_active)
                            {
                                res.json({
                                    status: config.statusMessage.failed,
                                    statusMessage: config.statusMessage.user.isActiveLoginFailed,
                                    data: null
                                });
                            }
                            else
                            {
                                if (userInfo && req.body.password) {
                                    const requestPassword = req.body.password;
                                    if (bcrypt.compareSync(requestPassword, userInfo.password)) {
                                        const tokenInfo = {
                                            id: userInfo._id
                                        };
                                        const token = jwt.sign(tokenInfo, config.secret, { expiresIn: config.tokenLife });
                                        const userData = {
                                            id: userInfo.id,
                                            role: userInfo.role[0].name,
                                            name: userInfo.name,
                                            employee_id: userInfo.employee_id
                                        };

                                        res.json({
                                            status: config.statusMessage.success,
                                            statusMessage: config.statusMessage.user.loginSuccess,
                                            data: {
                                                user: userData,
                                                access_token: token
                                            }
                                        });
                                    } else {
                                        res.json({
                                            status: config.statusMessage.failed,
                                            statusMessage: config.statusMessage.user.loginFailed,
                                            data: null
                                        });
                                    }
                                } else {
                                    res.json({
                                        status: config.statusMessage.failed,
                                        statusMessage: (userInfo === null) ? config.statusMessage.user.notExist : config.statusMessage.user.passwordEmpty,
                                        data: null
                                    });
                                }
                            }
                        }
                    });
            } else {
                res.json({
                    status: config.statusMessage.failed,
                    statusMessage: config.statusMessage.user.employeeEmpty,
                    data: null
                });
            }
        } else {
            res.json({
                status: config.statusMessage.failed,
                statusMessage: config.statusMessage.user.requestEmpty,
                data: null
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
};

exports.register = function (req, res) {
    try {
        if (req.body !== undefined && req.body !== '') {
            if (req.body.infra_tower_id === "") {
                delete req.body.infra_tower_id;
            }
            delete req.body.role_id;
            req.body.role_id = mongoose.Types.ObjectId(config.roles[2]._id);
            const user = new User(req.body);
            user.save(function(error, resultSet) {
                if (error) {
                    if (error.name === mongoError && error.code === config.mongoCode.duplicateEntry) {
                        res.status(config.httpCode.validationFailed).json({
                            statusMessage: config.statusMessage.user.exist,
                            code: error.code
                        });
                    } else {
                        res.status(config.httpCode.validationFailed).json({
                            error: error
                        });
                    }
                } else {
                    const token = jwt.sign({ id: resultSet._id }, config.secret, { expiresIn: config.tokenLife });
                    const userData = {
                        id: resultSet._id,
                        role: 'User',
                        name: resultSet.name,
                        employee_id: resultSet.employee_id
                    };
                    res.json({
                        status: config.statusMessage.success,
                        statusMessage: config.statusMessage.user.registerSuccess,
                        data: {
                            user: userData,
                            access_token: token
                        }
                    });
                }
            });
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.user.requestEmpty
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
};

exports.forgotPassword = function (req, res) {
    try {
        if (req.body.token !== "") {
            change_password_update(req, res, req.body.token, config.statusMessage.forgot_password.successFinal, config.statusMessage.forgot_password.failedFinal);
        } else {
            var conditions = {
                employee_id: { $eq: req.body.employee_id },
                security_question_id: { $eq: mongoose.Types.ObjectId(req.body.security_question_id) },
                security_question_answer: { $eq: req.body.security_question_answer }
            };
            User
                .findOne(conditions).exec(function (err, user) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        if (user === null) {
                            res.status(config.httpCode.success).json({
                                statusMessage: config.statusMessage.forgot_password.failed
                            });
                        } else {
                            
                            const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: config.tokenLife });
                                    
                            res.status(config.httpCode.success).json({
                                status: config.statusMessage.success,
                                statusMessage: config.statusMessage.forgot_password.success,
                                token: token
                            });
                            
                        }
                    }
                });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }
};

exports.findAll = function (req, res) {
    try {
        if (req.body) {
            var conditions = {},
                page = 0,
                limit = config.pagination.limit;

            conditions = {
                employee_id: { $ne: 0 }
            };
            if (req.query) {
                if (req.query.employee_id) {
                    conditions = {
                        employee_id: { $ne: 0 },
                        employee_id: { $eq: req.query.employee_id },
                    };
                }
                if (req.query.page) {
                    page = (req.query.page !== 0) ? (req.query.page - 1) : req.query.page;
                }
            }

            User
                .find(conditions).countDocuments(function (err, count) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        User.find(conditions)
                            .populate('role', '_id name')
                            .populate('manager', '_id name')
                            .populate('project', '_id name')
                            .populate('infra', '_id name')
                            .limit(limit)
                            .skip(limit * page)
                            .sort({
                                name: 'asc'
                            })
                            .exec(function (err, users) {
                                if (err) {
                                    res.status(config.httpCode.internalServerError).json({
                                        error: err
                                    });
                                } else {
                                    res.status(config.httpCode.success).json({
                                        status: config.statusMessage.success,
                                        statusMessage: config.statusMessage.user.success,
                                        data: users,
                                        metadata: {
                                            totalRecords: count,
                                            limit: config.pagination.limit
                                        }
                                    });
                                }
                            });
                    }
                });
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.user.requestEmpty
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
};
exports.findAllManagers = function (req, res) {
    try {
        if (req.body) {
            User
                .find({
                    role_id: { $ne: mongoose.Types.ObjectId(config.roles[1]._id) },
                    is_active: { $eq: true }
                })
                .select('name _id')
                .exec(function (err, users) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        res.status(config.httpCode.success).json({
                            status: config.statusMessage.success,
                            statusMessage: config.statusMessage.user.success,
                            data: users
                        });
                    }
                });
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.user.requestEmpty
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
};
exports.findById = function (req, res) {
    try {
        if (req.body) {
            User
                .findOne({
                    _id: { $eq: req.decoded.id }
                })
                .select('name role_id manager_id project_id infra_tower_id shore_type is_active')
                .exec(function (err, user) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        res.status(config.httpCode.success).json({
                            status: config.statusMessage.success,
                            statusMessage: config.statusMessage.user.success,
                            data: user
                        });
                    }
                });
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.user.requestEmpty
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
};
exports.update = function (req, res) {
    try {
        if (req.body) {
            var userUpdate;
            var condition;
            if (req.decoded.id === config.users.admin_employee_id_object) {
                condition = {
                    employee_id: { $eq: req.body.employee_id }
                };
                userUpdate = {
                    $set: {
                            role_id: mongoose.Types.ObjectId(req.body.role_id),
                            name: req.body.name,
                            shore_type: req.body.shore_type,
                            project_id: mongoose.Types.ObjectId(req.body.project_id),
                            infra_tower_id: mongoose.Types.ObjectId(req.body.infra_tower_id),
                            manager_id: mongoose.Types.ObjectId(req.body.manager_id),
                            is_active: req.body.is_active
                        }
                    };
            } else {
                condition = {
                    _id: { $eq: req.decoded.id }
                };
                userUpdate = {
                    $set: {
                            name: req.body.name,
                            shore_type: req.body.shore_type,
                            project_id: mongoose.Types.ObjectId(req.body.project_id),
                            infra_tower_id: mongoose.Types.ObjectId(req.body.infra_tower_id),
                            manager_id: mongoose.Types.ObjectId(req.body.manager_id)
                        }
                    };
            }
            User
                .findOneAndUpdate(condition, userUpdate, {
                    new: true,
                    useFindAndModify: false
                })
                .exec(function (err, user) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        var role = config.roles.filter(function(element) {
                            return (user.role_id.toString() === element._id.toString());
                        });
                        const userData = {
                            id: user._id,
                            role: role[0].name,
                            name: user.name,
                            employee_id: user.employee_id
                        };
                        res.json({
                            status: config.statusMessage.success,
                            statusMessage: config.statusMessage.user.updated,
                            data: userData
                        });
                    }
                });
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.user.requestEmpty
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
}

exports.change_password = function (req, res) {
    try {
        if (req.body) {
            change_password_update(req, res, req.decoded.id, config.statusMessage.change_password.success, config.statusMessage.change_password.failed);
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.user.requestEmpty
            });
        }
    }
    catch(err) {
        const catchError = {
            id: new mongoose.Types.ObjectId().toHexString(),
            err: err
        };
        res.status(config.httpCode.internalServerError).json({
            statusMessage: config.statusMessage.internalServerError + catchError.id,
        });
    }    
}

function change_password_getId(req, res, token, successMessage, failMessage) {
    try {
        // verify makes sure that the token hasn't expired and has been issued by us
        jsonwebtoken.verify(req.body.token, config.secret, function(err, decoded) {
          if (err) {
            res.status(config.httpCode.success).json({
                status: config.statusMessage.success,
                statusMessage: failMessage
            });
          } else {
            change_password_update(req, res, decoded.id, successMessage, failMessage);
          }
        });          
      } catch (err) {
        res.status(config.httpCode.success).json({
            status: config.statusMessage.failed,
            statusMessage: failMessage,
            err: err
        });
      }
}

function change_password_update(req, res, decodeId, successMessage, failMessage) {
    var condition = {
        _id: { $eq: decodeId }
    };
    var updatePassword = bcrypt.hashSync(req.body.password, saltRounds);
    var userUpdate = { $set: { password: updatePassword} };
    User
        .findOneAndUpdate(condition, userUpdate, {
            new: true,
            useFindAndModify: false
        })
        .exec(function (err) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.status(config.httpCode.success).json({
                    status: config.statusMessage.success,
                    statusMessage: successMessage
                });
            }
        });
}