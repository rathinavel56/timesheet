// https://stackoverflow.com/questions/22401319/write-logs-in-file-using-log4js-in-node-js
// https://qiita.com/cobachan/items/953a507c7eb772f7f5d8#%E4%BD%BF%E3%81%84%E6%96%B9

const config = require('../config');
var log4js = require ('log4js');

log4js.configure(config.log_config);

module.exports = { 
  access: log4js.getLogger ('access'),
  system: log4js.getLogger ('system'),
  error: log4js.getLogger ('error'),
  debug: log4js.getLogger ('debug'),
  express: log4js.connectLogger (log4js.getLogger ('access'), {level: log4js.levels.INFO}),
  isDebug: function (category) {
    return (log4js.levels.DEBUG.level >= category.level.level);
  }
};