'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    static associate(models) {
      Issue.belongsTo(models.GitUser, { foreignKey: 'assigneeId' });
      Issue.belongsTo(models.GitUser, { foreignKey: 'authorId' });
      Issue.belongsTo(models.Repository, { foreignKey: 'ownerId' });
      Issue.hasMany(models.Label);
    }
  }
  Issue.init({
    id: DataTypes.STRING,
    uid: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    state: DataTypes.STRING,
    created_at: DataTypes.STRING,
    closed_at: DataTypes.STRING,
    ownerId: DataTypes.STRING,
    authorId: DataTypes.STRING,
    assigneeId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Issue',
  });
  return Issue;
};