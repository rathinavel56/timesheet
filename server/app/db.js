const mongoose = require('mongoose');
const dbUri = 'mongodb://localhost:27017/timesheet_dev';
mongoose.Promise = global.Promise;
mongoose.connect(dbUri, {
    useCreateIndex: true,
    useNewUrlParser: true
}, function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database !");
    }
});
module.exports = mongoose;