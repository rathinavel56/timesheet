const Role = require('../models/Role');
const config = require('../config');
const mongoose = require('mongoose');
exports.find = function (req, res) {
    try {
        Role
        .find({
            name: { $ne: "Admin" },
            is_active: { $eq: true }
        })
        .exec(function (err, resultSet) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.json({
                    status: config.statusMessage.success,
                    statusMessage: config.statusMessage.role.success,
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