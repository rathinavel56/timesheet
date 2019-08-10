const Role = require('../models/Role');
const config = require('../config');
exports.find = function (req, res) {
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
};