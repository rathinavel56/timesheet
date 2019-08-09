const SecurityQuestion = require('../models/SecurityQuestion');
const config = require('../config');
const mongoError = 'MongoError';

exports.create = function (req, res) {
    if (req.body !== undefined && req.body !== '') {
        const securityQuestion = new SecurityQuestion(req.body);
        securityQuestion
            .save()
            .then(resultSet => {
                res.status(config.httpCode.success).json({
                    status: "success",
                    statusMessage: "Security Question Created Successfully",
                    data: resultSet
                });
            })
            .catch(error => {
                if (error.name === mongoError && error.code === config.mongoCode.duplicateEntry) {
                    res.status(config.httpCode.validationFailed).json({
                        errors: {
                            statusMessage: "Security Question already exsist",
                            code: error.code
                        }
                    });
                } else {
                    res.status(config.httpCode.validationFailed).json({ error });
                }
            });
    } else {
        res.status(config.httpCode.badRequest).json({
            statusMessage: "User Can't be created due to empty object"
        });
    }
};
exports.find = function (req, res) {
    SecurityQuestion.find({}, function (err, resultSet) {
        if (err) {
            res.status(config.httpCode.internalServerError).json({
                error: err
            });
        } else {
            res.status(config.httpCode.success).json({ status: "success", data: resultSet });
        }
    });
};
