const DailyTimeSheet = require('../models/DailyTimeSheet');
const User = require('../models/User');
const config = require('../config');
const XLSX = require('xlsx');
const mongoose = require('mongoose');
exports.create = function (req, res) {
    try {
        var startDate = new Date(req.body.start + 'T00:00:00.000+00:00');
        var endDate = new Date(req.body.end + 'T00:00:00.000+00:00');
        DailyTimeSheet.find({
            "date": {
                "$gte": startDate.toISOString(),
                "$lte": endDate.toISOString()
            }
        })
        .populate('user', '_id name')
        .populate('manager', '_id name')
        .populate('infra', '_id name')
        .sort({ date: 1 })
        .exec(function (err, dailyTimeSheet) {
            if (dailyTimeSheet.length > 0) {
                const conditions = {
                    employee_id: { $ne: 0 },
                    is_active: { $eq: true },
                };
                User.find(conditions)
                    .select('_id name manager_id infra_tower_id employee_id is_active shore_type')
                    .populate('manager', '_id name')
                    .populate('infra', '_id name')
                    .exec(function (err, users) {
                        if (err) {
                            res.status(config.httpCode.internalServerError).json({
                                error: err
                            });
                        } else {
                            /* Initial row */
                            var ws = XLSX.utils.json_to_sheet([
                                { A: "Emp ID", B: "Name", C: "On/OffShore", D: "Billability", E: "AA Manager", F: "Infra Tower", G: "Date" }
                            ], { header: ["A", "B", "C", "D", "E", "F", "G"], skipHeader: true, origin: "A2" });
                            // ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 2, c: 0 } }, { s: { r: 1, c: 1 }, e: { r: 2, c: 1 } }, { s: { r: 1, c: 2 }, e: { r: 2, c: 2 } }, { s: { r: 1, c: 3 }, e: { r: 2, c: 3 } }, { s: { r: 1, c: 4 }, e: { r: 2, c: 4 } }, { s: { r: 1, c: 5 }, e: { r: 2, c: 5 } }, { s: { r: 1, c: 6 }, e: { r: 2, c: 6 } }];
                            ws['!autofilter'] = { ref: "A3:G3" };
                            ws['!merges'] = [];
                            var originCell = 4;
                            const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                            var dates = getDates(startDate, endDate);
                            var dateCounter = 8;
                            var dateArray = [];
                            dates.forEach(function (currentDate) {
                                const getDate = currentDate.getDate();
                                const day = ((getDate < 10) ? '0' + getDate : getDate);
                                const month = (currentDate.getMonth() + 1);
                                const dateFormatted = currentDate.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
                                const convertToNumberToExcel = convertToNumberingScheme(dateCounter);
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: getDate
                                }], {
                                        skipHeader: true,
                                        origin: convertToNumberToExcel + '2'
                                    });
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: weekday[new Date(dateFormatted).getDay()]
                                }], {
                                        skipHeader: true,
                                        origin: convertToNumberToExcel + '3'
                                    });
                                dateArray.push({ date: getDate, cell: convertToNumberToExcel });
                                dateCounter++;
                            });
                            var staticColumn = convertToNumberingScheme(dateCounter);
                            XLSX.utils.sheet_add_json(ws, [{
                                A: 'Total BL',
                                B: 'Total NBL',
                                C: 'BL',
                                D: 'EL',
                                E: 'PL',
                                F: 'SL',
                                G: 'Holiday',
                                H: 'Weekday',
                                I: 'Weekend',
                                J: 'Calledout',
                            }], {
                                    skipHeader: true,
                                    origin: staticColumn + '2'
                                });
                            XLSX.utils.sheet_add_json(ws, [{
                                A: 'Hrs',
                                B: 'Hrs',
                                C: 'Days',
                                D: 'Days',
                                E: 'Days',
                                F: 'Planned OT',
                                G: 'Planned OT',
                                H: 'OT',
                            }], {
                                    skipHeader: true,
                                    origin: staticColumn + '3'
                                });
                            users.forEach(function (value) {
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: value.employee_id,
                                    B: value.name,
                                    C: 'OFF',
                                    D: '100%',
                                    E: value.manager[0].name,
                                    F: value.infra[0].name
                                }], {
                                        skipHeader: true,
                                        origin: "A" + originCell
                                    });
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: 'BAU'
                                }], {
                                        skipHeader: true,
                                        origin: "G" + originCell
                                    });

                                XLSX.utils.sheet_add_json(ws, [{
                                    A: 'Planned OT'
                                }], {
                                        skipHeader: true,
                                        origin: "G" + (originCell + 1)
                                    });

                                XLSX.utils.sheet_add_json(ws, [{
                                    A: 'Unplanned OT'
                                }], {
                                        skipHeader: true,
                                        origin: "G" + (originCell + 2)
                                    });    
                                dailyTimeSheet.filter(function (el) {
                                    if (value._id.toString() === el.user_id.toString()) {
                                        var cellId = dateArray.filter(function (value) {
                                            return (el.date.getDate() === value.date);
                                        });
                                        var bauFill = config.bau.filter(function (bauData) {
                                            return (bauData.id.toString() === el.bau.toString());
                                        });
                                        XLSX.utils.sheet_add_json(ws, [{
                                            A: bauFill[0].name
                                        }], {
                                                skipHeader: true,
                                                origin: cellId[0].cell + originCell
                                            });
                                        if (el.ot_planned !== '') {
                                            XLSX.utils.sheet_add_json(ws, [{
                                                A: el.ot_planned
                                            }], {
                                                    skipHeader: true,
                                                    origin: cellId[0].cell + (originCell + 1)
                                                });
                                        }
                                        if (el.ot_unplanned !== '') {
                                            XLSX.utils.sheet_add_json(ws, [{
                                                A: el.ot_unplanned
                                            }], {
                                                    skipHeader: true,
                                                    origin: cellId[0].cell + (originCell + 2)
                                                });
                                        }
                                        //Total BL  =SUM(H4:AK4)
                                        //Total NBL =SUM((COUNTIF(H4:AK4,"8N")*8)+(COUNTIF(H4:AK4,"4N"))*4)
                                        // BL =(AL4)/8
                                        // EL  =COUNTIF(H4:AK4,"EL")
                                        //PL =COUNTIF(H4:AK4,"PL")
                                        //Weekday =SUM(J5:N5,Q5:U5,X5:AB5,AE5:AI5)
                                        // Weekend = =SUM(H5:I5,O5:P5,V5:W5,AC5:AD5,AJ5:AK5)
                                        // Calledout =$AL$6
                                    }
                                });


                                /*ws['!merges'].push({
                                    s: { r: originCell, c: 0 },
                                    e: { r: 2, c: 0 }
                                });*/
                                originCell = (originCell + 3);
                            });
                            // ws['A3'] = [];
                            // ws['A3'].c = [{a:"SheetJS", t:"I'm a little comment, short and stout!"}];
                            var wb = XLSX.utils.book_new();
                            var wopts = { bookType: 'xlsx', type: 'buffer' };
                            XLSX.utils.book_append_sheet(wb, ws, "People");
                            var wbout = Buffer.from(XLSX.write(wb, wopts));
                            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                            res.setHeader('Content-Disposition', 'attachment; filename=TimeSheet.xlsx');
                            // res.type('application/octet-stream');
                            res.send(wbout);
                        }
                    });
            } else {
                return res.status(config.httpCode.success).json({
                    status: config.statusMessage.failed,
                    statusMessage: config.statusMessage.time_sheet.exportFailed
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
            err: err
        });
    }
};

function convertToNumberingScheme(number) {
    var baseChar = ("A").charCodeAt(0),
        letters = "";

    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while (number > 0);

    return letters;
}

function getDates(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
} 