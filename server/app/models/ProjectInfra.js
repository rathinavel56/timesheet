const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectInfraSchema = new Schema({
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
  project_id: {
    type: String,
    require: true
  },
  infra_tower_id: {
    type: String,
    require: true
  },
  is_active: {
    type: Boolean,
    require: true,
    default: 1
  }
});
ProjectInfraSchema.virtual('project', {
  ref: 'Project',
  localField: 'project_id',
  foreignField: '_id'
});
ProjectInfraSchema.virtual('infra_tower', {
  ref: 'InfraTower',
  localField: 'infra_tower_id',
  foreignField: '_id'
});
ProjectInfraSchema.set('toObject', { virtuals: true });
ProjectInfraSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('ProjectInfra', ProjectInfraSchema, 'project_infra');