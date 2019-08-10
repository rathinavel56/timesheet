const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
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
    default: true
  }
});
RoleSchema.set('toJSON', { virtuals: true })
  .pre('save', function (next) {
    this.updated_at = Date.now();
    next();
  });
const Role = mongoose.model('Role', RoleSchema, 'roles');
module.exports = Role;