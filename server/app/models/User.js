const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  employee_id: {
    type: Number,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role_id: {
    type: mongoose.Types.ObjectId,
    require: true,
    default: '5d285b460b5454d796f0f0db'
  },
  manager_id: {
    type: mongoose.Types.ObjectId,
    require: true,
    default: '5d270bc80b5454d796f0f0da'
  },
  shore_type: {
    type: Number,
    require: true,
    default: 0
  },  
  security_question_id: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'SecurityQuestion'
  },
  security_question_answer: {
    type: String,
    trim: true,
    require: true
  },
  project_id: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'Project'
  },
  infra_tower_id: {
    type: mongoose.Types.ObjectId,
    ref: 'InfraTower'
  },
  is_active: {
    type: Boolean,
    require: true,
    default: 1
  }
});
UserSchema.virtual('manager', {
  ref: 'User',
  localField: 'manager_id',
  foreignField: '_id'
});
UserSchema.virtual('project', {
  ref: 'Project',
  localField: 'project_id',
  foreignField: '_id'
});
UserSchema.virtual('infra', {
  ref: 'InfraTower',
  localField: 'infra_tower_id',
  foreignField: '_id'
});
UserSchema.virtual('role', {
  ref: 'Role',
  localField: 'role_id',
  foreignField: '_id'
});
UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  this.updated_at = Date.now();
  next();
});
const User = mongoose.model('User', UserSchema);
module.exports = User;