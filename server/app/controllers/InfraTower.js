const mongoose = require('mongoose');
const InfraTower = require('../models/InfraTower');
const ProjectInfra = require('../models/ProjectInfra');
const mongoError = 'MongoError';
const config = require('../config');
exports.create = function (req, res) {
    const infraTower = new InfraTower(req.body);
    infraTower
        .save()
        .then(resultSet => {
            res.status(config.httpCode.success).json({
                status: config.statusMessage.success,
                statusMessage: config.statusMessage.infraTower.created,
                data: resultSet
            });
        })
        .catch(error => {
            if (error.name === mongoError && error.code === config.mongoCode.duplicateEntry) {
                res.status(config.httpCode.validationFailed).json({
                    errors: {
                        statusMessage: config.statusMessage.infraTower.exist,
                        code: error.code
                    }
                });
            } else {
                res.status(config.httpCode.validationFailed).json({
                    error: error
                });
            }
        });
};

exports.update = function (req, res) {
    var condition = {
        _id: { $eq: req.body.id }
    };
    var infraTowerUpdate = { $set: { name: req.body.name, is_active: req.body.is_active } };
    InfraTower
        .findOneAndUpdate(condition, infraTowerUpdate, {
            new: true
        })
        .exec(function (err, resultSet) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.infraTower.success,
                    data: resultSet
                });
            }
        });
};

exports.findAll = function (req, res) {
    if (req.body) {
        var conditions = {},
            page = 0,
            limit = config.pagination.limit;

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

        InfraTower
            .find(conditions).countDocuments(function (err, count) {
                if (err) {
                    res.status(config.httpCode.internalServerError).json({
                        error: err
                    });
                } else {
                    InfraTower.find(conditions)
                        .limit(limit)
                        .skip(limit * page)
                        .sort({
                            name: 'asc'
                        })
                        .exec(function (err, infraTowers) {
                            if (err) {
                                res.status(config.httpCode.internalServerError).json({
                                    error: err
                                });
                            } else {
                                res.status(config.httpCode.success).json({
                                    status: config.statusMessage.success,
                                    statusMessage: config.statusMessage.infraTower.success,
                                    data: infraTowers,
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

exports.findList = function (req, res) {
    if (req.query && req.query.project_id) {
        var formatProject = [];
        req.query.project_id.split(',').forEach(function (element) {
            formatProject.push(mongoose.Types.ObjectId(element));
        });
        var conditions = { 'project_id': { $in: formatProject }, is_active: { $eq: true } };
        ProjectInfra
            .find(conditions)
            .select('infra_tower_id')
            .exec(function (err, infraTowers) {
                if (err) {
                    res.status(config.httpCode.internalServerError).json({
                        error: err
                    });
                } else {
                    getProjectInfraList(res, infraTowers);
                }
            });
    } else {
        getProjectInfraList(res, null);
    }

};

function getProjectInfraList(res, infraTowers) {
    var conditions = {
        is_active: { $eq: true }
    };
    if (infraTowers !== null) {
        var formatInfraTower = [];
        infraTowers.forEach(function (element) {
            formatInfraTower.push(mongoose.Types.ObjectId(element.infra_tower_id));
        });
        conditions = { '_id': { $in: formatInfraTower }, is_active: { $eq: true } };
    }
    InfraTower.find(conditions)
        .sort({
            name: 'asc'
        })
        .exec(function (err, infraTowers) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.status(config.httpCode.success).json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.infraTower.success,
                    data: infraTowers
                });
            }
        });
}