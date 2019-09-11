const DailyTimeSheet = require('../models/DailyTimeSheet');
const User = require('../models/User');
const config = require('../config');
const XLSX = require('xlsx');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
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
                            var ws = XLSX.utils.json_to_sheet([
                                { A: "Emp ID", B: "Name", C: "On/OffShore", D: "Billability", E: "AA Manager", F: "Infra Tower", G: "Date" }
                            ], { header: ["A", "B", "C", "D", "E", "F", "G"], skipHeader: true, origin: "A2" });
                            ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 2, c: 0 } }, { s: { r: 1, c: 1 }, e: { r: 2, c: 1 } }, { s: { r: 1, c: 2 }, e: { r: 2, c: 2 } }, { s: { r: 1, c: 3 }, e: { r: 2, c: 3 } }, { s: { r: 1, c: 4 }, e: { r: 2, c: 4 } }, { s: { r: 1, c: 5 }, e: { r: 2, c: 5 } }, { s: { r: 1, c: 6 }, e: { r: 2, c: 6 } }];
                            ws['!autofilter'] = { ref: "A3:G3" };
                            var originCell = 4;
                            const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                            var dates = getDates(startDate, endDate);
                            var dateCounter = 8;
                            var dateArray = [];
                            var convertToNumberToExcel;
                            var weekDays = [];
                            var weekendDays = [];
                            dates.forEach(function (currentDate) {
                                const getDate = currentDate.getDate();
                                const day = ((getDate < 10) ? '0' + getDate : getDate);
                                const month = (currentDate.getMonth() + 1);
                                const dateFormatted = currentDate.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
                                const dayIndex = new Date(dateFormatted).getDay();
                                convertToNumberToExcel = convertToNumberingScheme(dateCounter);
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: getDate
                                }], {
                                        skipHeader: true,
                                        origin: convertToNumberToExcel + '2'
                                    });
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: weekday[dayIndex]
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
                                F: 'Days',
                                G: 'Days',
                                H: 'Planned OT',
                                I: 'Planned OT',
                                K: 'OT',
                            }], {
                                    skipHeader: true,
                                    origin: staticColumn + '3'
                                });
                            users.forEach(function (elementSingle) {
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: elementSingle.employee_id,
                                    B: elementSingle.name,
                                    C: (elementSingle.shore_type === 0) ? 'OFF' : 'ON',
                                    D: '100%',
                                    E: (elementSingle.manager) ? elementSingle.manager[0].name: 'Admin',
                                    F: (elementSingle.infra.length > 0) ? elementSingle.infra[0].name: ''
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
                                    if (elementSingle._id.toString() === el.user_id.toString()) {
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
                                        if (el.addtion_hours_planned !== '') {
                                            XLSX.utils.sheet_add_json(ws, [{
                                                A: el.addtion_hours_planned
                                            }], {
                                                    skipHeader: true,
                                                    origin: cellId[0].cell + (originCell + 1)
                                                });
                                        }
                                        if (el.ot_unplanned !== '') {
                                            XLSX.utils.sheet_add_json(ws, [{
                                                A: el.addtion_hours_unplanned
                                            }], {
                                                    skipHeader: true,
                                                    origin: cellId[0].cell + (originCell + 2)
                                                });
                                        }
                                    }
                                });
                                originCell = (originCell + 3);
                            });
                            for (i = 4; i <= (originCell-3); i++) {
                                var i1 = (i + 1);
                                var i2 = (i + 2); 
                                XLSX.utils.sheet_add_json(ws, [{
                                    A: { f: 'SUM((COUNTIF(H' + i + ':' + convertToNumberToExcel + i +',"8")*8)+(COUNTIF(H' + i + ':' + convertToNumberToExcel + i +',"4"))*4)'},
                                    B: { f: 'SUM((COUNTIF(H' + i + ':' + convertToNumberToExcel + i +',"8N")*8)+(COUNTIF(H' + i + ':' + convertToNumberToExcel + i +',"4N"))*4)'},
                                    C: { f: 'SUM((COUNTIF(H' + i + ':' + convertToNumberToExcel + i +',"8")*8)+(COUNTIF(H' + i + ':' + convertToNumberToExcel + i +',"4"))*4)/8'},
                                    D: { f: 'COUNTIF(H' + i + ':' + convertToNumberToExcel + i + ',"EL")'},
                                    E: { f: 'COUNTIF(H' + i + ':' + convertToNumberToExcel + i + ',"PL")'},
                                    F: { f: 'COUNTIF(H' + i + ':' + convertToNumberToExcel + i + ',"SL")'},
                                    G: { f: 'COUNTIF(H' + i + ':' + convertToNumberToExcel + i + ',"Holiday")'},
                                    H: { f: '=SUM(SUMIF(H3:' + convertToNumberToExcel + '3,"Mon",H' + i1 + ':' + convertToNumberToExcel + i1 + ')+SUMIF(H3:' + convertToNumberToExcel + '3,"Tue",H' + i1 + ':' + convertToNumberToExcel + i1 + ')+SUMIF(H3:' + convertToNumberToExcel + '3,"Wed",H' + i1 + ':' + convertToNumberToExcel + i1 + ')+SUMIF(H3:' + convertToNumberToExcel + '3,"Thu",H' + i1 + ':' + convertToNumberToExcel + i1 + ')+SUMIF(H3:' + convertToNumberToExcel + '3,"Fri",H' + i1 + ':' + convertToNumberToExcel + i1 + '))'},
                                    I: { f: '=SUM(SUMIF(H3:' + convertToNumberToExcel + '3,"Sat",H' + i1 + ':' + convertToNumberToExcel + i1 + ')+SUMIF(H3:' + convertToNumberToExcel + '3,"Sun",H' + i1 + ':' + convertToNumberToExcel + i1 + '))'},
                                    K: { f: 'SUM(H' + i2 + ':' + convertToNumberToExcel + i2 + ')'},
                                }], {
                                        skipHeader: true,
                                        origin: convertToNumberingScheme(dateCounter) + i
                                    });

                                i = (i + 2);    
                            }
                            var wb = XLSX.utils.book_new();
                            var wopts = { bookType: 'xlsx', type: 'buffer' };
                            XLSX.utils.book_append_sheet(wb, ws, req.body.month);
			   var filePath = path.resolve('./app/public/' + "TimeSheet_" + req.body.month + "_" + req.body.year + ".xlsx")
                            XLSX.writeFile(wb, filePath);
				setTimeout(function() {
					if (fs.existsSync(filePath)) {
						fs.unlinkSync(filePath);
					}
				}, 50000);
                            res.end();
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
