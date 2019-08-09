const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
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
    require: true
  },
  is_active: {
    type: Boolean,
    require: true,
    default: 1
  }
});
const Role = mongoose.model('Role', RoleSchema, 'roles');
module.exports = Role;