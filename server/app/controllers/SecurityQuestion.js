const SecurityQuestion = require('../models/SecurityQuestion');
const config = require('../config');
const mongoError = 'MongoError';
const mongoose = require('mongoose');
exports.find = function (req, res) {
    try {
        SecurityQuestion.find({}, function (err, resultSet) {
            if (err) {
                res.status(config.httpCode.internalServerError).json({
                    error: err
                });
            } else {
                res.status(config.httpCode.success).json({ status: "success", data: resultSet });
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
