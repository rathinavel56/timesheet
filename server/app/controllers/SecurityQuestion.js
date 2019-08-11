const SecurityQuestion = require('../models/SecurityQuestion');
const config = require('../config');
const mongoError = 'MongoError';
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
