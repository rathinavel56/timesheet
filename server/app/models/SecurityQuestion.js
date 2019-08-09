const config = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SecurityQuestionSchema = new Schema({
  created_at: {
    type: Date,
    require: true,
    default: Date.now
  },
  update_at: {
    type: Date,
    require: true,
    default: Date.now
  },
  name: {
    type: String,
    unique: true,
    require: true,
    trim: true,
    validate: [isEmpty, config.statusMessage.security_question.nameEmpty]
  },
  is_active: {
    type: Boolean,
    require: true,
    default: 1
  }
});
function isEmpty(value) {
  return value === '' ? false : true;
}
SecurityQuestionSchema.set('toJSON', { virtuals: true })
  .pre('save', function (next) {
    this.updated_at = Date.now();
    next();
  });
module.exports = mongoose.model('SecurityQuestion', SecurityQuestionSchema, 'security_questions');