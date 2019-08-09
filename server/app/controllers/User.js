const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoError = 'MongoError';
const config = require('../config');

exports.login = function (req, res) {
    if (req.body) {
        if (req.body.employee_id) {
            User
                .findOne({ employee_id: req.body.employee_id })
                .populate('role', '_id name')
                .exec(function (err, userInfo) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        if (userInfo && req.body.password) {
                            const requestPassword = req.body.password;
                            if (bcrypt.compareSync(requestPassword, userInfo.password)) {

                                const token = jwt.sign({ id: userInfo._id }, config.secret, { expiresIn: config.tokenLife });
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
                                statusMessage: (userInfo) ? config.statusMessage.user.notExist : config.statusMessage.user.passwordEmpty,
                                data: null
                            });
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
};

exports.register = function (req, res) {
    if (req.body !== undefined && req.body !== '') {
        const user = new User(req.body);
        user
            .save()
            .then(resultSet => {
                userProj.user_id = resultSet._id;
                const token = jwt.sign({ id: resultSet._id }, config.secret, { expiresIn: config.tokenLife });
                res.status(config.httpCode.success).json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.user.created,
                    data: resultSet,
                    token: token
                });
            })
            .catch(error => {
                if (error.name === mongoError && error.code === config.mongoCode.duplicateEntry) {
                    res.status(config.httpCode.validationFailed).json({
                        errors: {
                            statusMessage: config.statusMessage.user.exist,
                            code: error.code
                        }
                    });
                } else {
                    res.status(config.httpCode.validationFailed).json({
                        error: error
                    });
                }
            });
    } else {
        res.status(config.httpCode.badRequest).json({
            statusMessage: config.statusMessage.user.requestEmpty
        });
    }
};

exports.forgotPassword = function (req, res) {
    if (req.body !== undefined) {
        res.send('test');
    } else {
        res.status(400).json({
            statusMessage: config.statusMessage.user.requestEmpty
        });
    }
};

exports.findAll = function (req, res) {
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
};
exports.findAllManagers = function (req, res) {
    if (req.body) {
        User
            .find({
                role_id: { $ne: '5d285b460b5454d796f0f0dd' },
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
};
exports.update = function (req, res) {
    if (req.body) {
        var condition = {
            employee_id: { $eq: req.body.employee_id }
        };
        var userUpdate = { $set: { role_id: req.body.role_id, manager_id: req.body.manager_id, is_active: req.body.is_active } };
        User
            .findOneAndUpdate(condition, userUpdate, {
                new: true
            })
            .exec(function (err) {
                if (err) {
                    res.status(config.httpCode.internalServerError).json({
                        error: err
                    });
                } else {
                    res.json({
                        status: config.statusMessage.success,
                        statusMessage: config.statusMessage.user.updated
                    });
                }
            });
    } else {
        res.status(config.httpCode.badRequest).json({
            statusMessage: config.statusMessage.user.requestEmpty
        });
    }
}

exports.change_password = function (req, res) {
    if (req.body) {
        var condition = {
            _id: { $eq: '5d270c0317c72927f0f4b30b' }
        };
        var userUpdate = { $set: { password: req.body.password } };
        User
            .findOneAndUpdate(condition, userUpdate, {
                new: true
            })
            .exec(function (err) {
                if (err) {
                    res.status(config.httpCode.internalServerError).json({
                        error: err
                    });
                } else {
                    res.json({
                        status: config.statusMessage.success,
                        statusMessage: config.statusMessage.user.updated
                    });
                }
            });
    } else {
        res.status(config.httpCode.badRequest).json({
            statusMessage: config.statusMessage.user.requestEmpty
        });
    }
}