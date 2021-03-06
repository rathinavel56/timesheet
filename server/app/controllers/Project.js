﻿const Project = require('../models/Project');
const mongoError = 'MongoError';
const config = require('../config');
const mongoose = require('mongoose');
exports.create = function (req, res) {
    try {
        const project = new Project(req.body);
        project
        .save()
        .then(resultSet => {
            res.status(config.httpCode.success).json({
                status: config.statusMessage.success,
                statusMessage: config.statusMessage.project.created,
                data: resultSet
            });
        })
        .catch(error => {
            if (error.name === mongoError && error.code === config.mongoCode.duplicateEntry) {
                res.status(config.httpCode.validationFailed).json({
                    errors: {
                        statusMessage: config.statusMessage.project.exist,
                        code: error.code
                    }
                });
            } else {
                res.status(config.httpCode.validationFailed).json({
                    error: error
                });
            }
        });
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
        var condition = {
            _id: { $eq: req.body.id }
        };
        var projectUpdate = { $set: { name: req.body.name, is_active: req.body.is_active } };
        Project
        .findOneAndUpdate(condition, projectUpdate, {
            new: true,
            useFindAndModify: false
        })
        .exec(function (err, resultSet) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.project.success,
                    data: resultSet
                });
            }
        });
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
                is_active: { $eq: true }
            };
            if (req.query) {
                if (req.query.name) {
                    conditions = {
                        is_active: { $eq: true },
                        name: { $eq: req.query.name },
                    };
                }
                if (req.query.page) {
                    page = (req.query.page !== 0) ? (req.query.page - 1) : req.query.page;
                }
            }

            Project
                .find(conditions).countDocuments(function (err, count) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        Project.find(conditions)
                            .limit(limit)
                            .skip(limit * page)
                            .sort({
                                name: 'asc'
                            })
                            .exec(function (err, projects) {
                                if (err) {
                                    res.status(config.httpCode.internalServerError).json({
                                        error: err
                                    });
                                } else {
                                    res.status(config.httpCode.success).json({
                                        status: config.statusMessage.success,
                                        statusMessage: config.statusMessage.project.success,
                                        data: projects,
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

exports.findList = function (req, res) {
    try {
        var conditions = {
            is_active: { $eq: true }
        };
        Project.find(conditions)
        .sort({
            name: 'asc'
        })
        .exec(function (err, projects) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.status(config.httpCode.success).json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.project.success,
                    data: projects
                });
            }
        });
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