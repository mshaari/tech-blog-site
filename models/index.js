const User = require('./User');
const Project = require('./Project');
const Comment = require('./Comment');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'commenter_id'
});

Comment.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'commenter_id',
});

Project.hasMany(Comment, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Project, Comment };