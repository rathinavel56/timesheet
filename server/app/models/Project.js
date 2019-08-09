const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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
    require: true,
    unique: true
  },
  is_active: {
    type: Boolean,
    require: true,
    default: 1
  }
});
module.exports = mongoose.model('Project', ProjectSchema, 'projects');