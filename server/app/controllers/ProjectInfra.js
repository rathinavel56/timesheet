const mongoose = require('mongoose');
const Project = require('../models/Project');
const InfraTower = require('../models/InfraTower');
const ProjectInfra = require('../models/ProjectInfra');
const config = require('../config');
exports.create = function (req, res) {
    var conditions = {
        project_id: { $eq: req.body.project_id },
        infra_tower_id: { $eq: req.body.infra_tower_id }
    };
    ProjectInfra
        .find(conditions).countDocuments(function (err, count) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                if (count === 0) {
                    const project = new ProjectInfra(req.body);
                    project
                        .save()
                        .then(resultSet => {
                            res.status(config.httpCode.success).json({
                                status: config.statusMessage.success,
                                statusMessage: config.statusMessage.project_infra.created,
                                data: resultSet
                            });
                        })
                        .catch(error => {
                            res.status(config.httpCode.success).json({
                                error: error
                            });
                        });
                } else {
                    res.status(config.httpCode.success).json({
                        errors: {
                            statusMessage: config.statusMessage.project_infra.exist,
                            code: err
                        }
                    });
                }
            }
        });
};

exports.update = function (req, res) {
    var conditions = {
        project_id: { $eq: req.body.project_id },
        infra_tower_id: { $eq: req.body.infra_tower_id },
        _id: { $ne: req.body.id }
    };
    ProjectInfra
        .find(conditions).countDocuments(function (err, count) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                if (count === 0) {
                    var condition = {
                        _id: { $eq: req.body.id }
                    };
                    var projectInfraUpdate = { $set: { project_id: req.body.project_id, infra_tower_id: req.body.infra_tower_id, is_active: req.body.is_active } };
                    ProjectInfra
                        .findOneAndUpdate(condition, projectInfraUpdate, {
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
                                    statusMessage: config.statusMessage.project_infra.success,
                                    data: resultSet
                                });
                            }
                        });
                } else {
                    res.status(config.httpCode.success).json({
                        errors: {
                            statusMessage: config.statusMessage.project_infra.exist,
                            code: err
                        }
                    });
                }
            }
        });
};

exports.findAll = function (req, res) {
    if (req.body) {
        if (req.query.name) {
            Project.find({ name: new RegExp(req.query.name, "i") })
                .select('_id')
                .exec(function (err, projects) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        InfraTower.find({ name: new RegExp(req.query.name, "i") })
                            .select('_id')
                            .exec(function (err, infraTowers) {
                                if (err) {
                                    res.status(config.httpCode.internalServerError).json({
                                        error: err
                                    });
                                } else {
                                    getProjectInfra(req, res, projects, infraTowers);
                                }
                            });
                    }
                });
        } else {
            getProjectInfra(req, res, null, null);
        }

    } else {
        res.status(config.httpCode.badRequest).json({
            statusMessage: config.statusMessage.user.requestEmpty
        });
    }
};

exports.findList = function (req, res) {
    var conditions = {
        is_active: { $eq: true }
    };
    ProjectInfra.find(conditions)
        .sort({
            name: 'asc'
        })
        .exec(function (err, ProjectInfras) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.status(config.httpCode.success).json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.project_infra.success,
                    data: ProjectInfras
                });
            }
        });

};

function getProjectInfra(req, res, projects, infraTowers) {
    var conditions = {},
        orConditions = [],
        page = 0,
        limit = config.pagination.limit;

    if (projects !== null && projects.length > 0) {
        var formatProject = [];
        projects.forEach(function (element) {
            formatProject.push(mongoose.Types.ObjectId(element._id));
        });
        orConditions.push({ 'project_id': { $in: formatProject } });
    }
    if (infraTowers !== null && infraTowers.length > 0) {
        var formatInfraTower = [];
        infraTowers.forEach(function (element) {
            formatInfraTower.push(mongoose.Types.ObjectId(element._id));
        });
        orConditions.push({ 'infra_tower_id': { $in: formatInfraTower } });
    }
    if (orConditions.length > 0) {
        conditions = { $or: orConditions };
    }
    if (req.query) {
        if (req.query.page) {
            page = (req.query.page !== 0) ? (req.query.page - 1) : req.query.page;
        }
        if (req.query.name && orConditions.length === 0) {
            conditions = { '_id': null } ;
        }
    }
    ProjectInfra
        .find(conditions).countDocuments(function (err, count) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                ProjectInfra.find(conditions)
                    .populate('project', '_id name')
                    .populate('infra_tower', '_id name')
                    .limit(limit)
                    .skip(limit * page)
                    .sort({
                        name: 'asc'
                    })
                    .exec(function (err, projectInfras) {
                        if (err) {
                            res.status(config.httpCode.internalServerError).json({
                                error: err
                            });
                        } else {
                            res.status(config.httpCode.success).json({
                                status: config.statusMessage.success,
                                statusMessage: config.statusMessage.project_infra.success,
                                data: projectInfras,
                                metadata: {
                                    totalRecords: count,
                                    limit: config.pagination.limit
                                }
                            });
                        }
                    });
            }
        });
}