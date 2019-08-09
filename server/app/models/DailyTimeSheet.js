const config = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DailyTimeSheetSchema = new Schema({
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
  manager_id: {
    type: mongoose.Types.ObjectId,
    require: true
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    require: true
  },
  shore_type: {
    type: Number,
    require: true,
    default: 0
  },
  date: {
    type: Date,
    require: true
  },
  project_id: {
    type: mongoose.Types.ObjectId,
    require: true
  },
  infra_tower_id: {
    type: mongoose.Types.ObjectId
  },
  bau: {
    type: Number,
    require: true
  },
  ot_planned: {
    type: Number,
    require: true
  },
  ot_unplanned: {
    type: Number,
    require: true
  },
  addtion_hours_planned: {
    type: Number,
    require: true,
    default: 0
  },
  addtion_hours_desc_planned: {
    type: String,
    require: true
  },
  addtion_hours_unplanned: {
    type: Number,
    require: true,
    default: 0
  },
  addtion_hours_desc_unplanned: {
    type: String,
    require: true
  },
  weekend: {
    type: Boolean,
    require: true
  },
  billed_hour: {
    type: Number,
    require: true
  },
  non_billed_hour: {
    type: Number,
    require: true
  }
});
DailyTimeSheetSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id'
});
DailyTimeSheetSchema.virtual('manager', {
  ref: 'User',
  localField: 'manager_id',
  foreignField: '_id'
});
DailyTimeSheetSchema.virtual('project', {
  ref: 'Project',
  localField: 'project_id',
  foreignField: '_id'
});
DailyTimeSheetSchema.virtual('infra', {
  ref: 'InfraTower',
  localField: 'infra_tower_id',
  foreignField: '_id'
});
DailyTimeSheetSchema.set('toObject', { virtuals: true });
DailyTimeSheetSchema.set('toJSON', { virtuals: true });
DailyTimeSheetSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
  });
module.exports = mongoose.model('DailyTimeSheet', DailyTimeSheetSchema, 'daily_time_sheets');