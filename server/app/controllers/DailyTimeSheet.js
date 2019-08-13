const DailyTimeSheet = require('../models/DailyTimeSheet');
const User = require('../models/User');
const config = require('../config');
const mongoose = require('mongoose');
exports.create = function (req, res) {
    try {
        const userId = req.decoded.id;
        if (req.body !== undefined && req.body !== '' && req.body[0] && req.body.start != '' && req.body.end !== '' && userId !== undefined && userId !== null) {
            User
                .findOne({
                    _id: { $eq: userId },
                })
                .exec(function (err, userInfo) {
                    if (userInfo !== null) {
                        var startDate = new Date(req.body[0].start + 'T00:00:00.000+00:00');
                        var endDate = new Date(req.body[0].end + 'T00:00:00.000+00:00');
                        DailyTimeSheet.deleteMany({
                            "date": {
                                "$gte": startDate.toISOString(),
                                "$lt": endDate.toISOString()
                            }
                        }, function () {
                            var isSave = false;
                            req.body.forEach(function (element) {
                                element.days.forEach(function (childElement) {
                                    if (childElement.bau !== 0) {
                                        var billed_hour = 0;
                                        var non_billed_hour = 0;
                                        if (childElement.bau === 1 || childElement.bau == 2)
                                        {
                                            billed_hour = (childElement.bau === 1) ? 8 : 4;
                                        }
                                        if (childElement.bau === 3 || childElement.bau == 4)
                                        {
                                            non_billed_hour = (childElement.bau === 3) ? 8 : 4;
                                        }
                                        const insertRecord = {
                                            user_id: userId,
                                            manager_id: mongoose.Types.ObjectId(userInfo.manager_id),
                                            shore_type: userInfo.shore_type,
                                            project_id: mongoose.Types.ObjectId(userInfo.project_id),
                                            infra_tower_id: mongoose.Types.ObjectId(userInfo.infra_tower_id),
                                            date: new Date(childElement.id),
                                            bau: childElement.bau,
                                            ot_planned: childElement.ot_planned,
                                            ot_unplanned: childElement.ot_unplanned,
                                            addtion_hours_planned: childElement.addtion_hours_planned,
                                            addtion_hours_desc_planned: childElement.addtion_hours_desc_planned,
                                            addtion_hours_unplanned: childElement.addtion_hours_unplanned,
                                            addtion_hours_desc_unplanned: childElement.addtion_hours_desc_unplanned,
                                            weekend: false,
                                            billed_hour: billed_hour,
                                            non_billed_hour: non_billed_hour
                                        };
                                        DailyTimeSheet(insertRecord).save(function () {});
                                        isSave = true;
                                    } else {
                                        return;
                                    }
                                });
                            });
                            if (isSave) {
                                res.status(config.httpCode.success).json({
                                    statusMessage: config.statusMessage.time_sheet.success,
                                    status: config.statusMessage.success
                                });
                            } else {
                                res.status(config.httpCode.success).json({
                                    statusMessage: config.statusMessage.time_sheet.failed,
                                    status: config.statusMessage.failed
                                });
                            }
                        });

                    } else {
                        res.status(config.httpCode.badRequest).json({
                            statusMessage: config.statusMessage.time_sheet.requestEmpty,
                            status: config.statusMessage.failed
                        });
                    }
                });

        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.time_sheet.requestEmpty,
                status: config.statusMessage.failed
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
        const userId = req.decoded.id;
        if (req.body !== undefined && req.query) {
            if (req.query.start !== '') {
                var startDate = new Date(req.query.start + 'T00:00:00.000+00:00').toISOString();
                var endDate = new Date(req.query.end + 'T00:00:00.000+00:00').toISOString();
                var conditions = {
                    user_id: { $eq: userId },
                    date: {
                        "$gte": startDate,
                        "$lte": endDate
                    }
                },
                    page = 0,
                    limit = 8;
            } else {
                var conditions = {
                    user_id: { $eq: userId }
                },
                    page = 0,
                    limit = config.pagination.limit;
                if (req.query.page) {
                    page = (req.query.page !== 0) ? (req.query.page - 1) : req.query.page;
                }
            }
            DailyTimeSheet
                .find(conditions).countDocuments(function (err, count) {
                    if (err) {
                        res.status(config.httpCode.internalServerError).json({
                            error: err
                        });
                    } else {
                        DailyTimeSheet.find(conditions)
                            .populate('manager', '_id name')
                            .populate('project', '_id name')
                            .populate('infra', '_id name')                        
                            .limit(limit)
                            .skip(limit * page)
                            .sort({ date: 1 })
                            .exec(function (err, dailyTimeSheets) {
                                if (err) {
                                    res.status(config.httpCode.internalServerError).json({
                                        error: err
                                    });
                                } else {
                                    res.status(config.httpCode.success).json({
                                        status: config.statusMessage.success,
                                        statusMessage: config.statusMessage.time_sheet.fetched,
                                        data: dailyTimeSheets,
                                        metadata: {
                                            totalRecords: count,
                                            limit: limit
                                        }
                                    });
                                }
                            });
                    }
                });
        } else {
            res.status(config.httpCode.badRequest).json({
                statusMessage: config.statusMessage.time_sheet.requestEmpty
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
function getWeeksInMonth() {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    var weeks = [],
        firstDate = new Date(year, month, 1),
        lastDate = new Date(year, month + 1, 0),
        numDays = lastDate.getDate();

    var start = 1;
    var end = 7 - firstDate.getDay();
    while (start <= numDays) {
        weeks.push({ start: start, end: end });
        start = end + 1;
        end = end + 7;
        if (end > numDays)
            end = numDays;
    }
    return weeks;
}