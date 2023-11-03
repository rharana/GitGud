'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GitUser extends Model {
    static associate(models) {
      GitUser.hasMany(models.Repository);
      GitUser.hasMany(models.Issue);
      GitUser.hasMany(models.Issue);
    }
  }
  GitUser.init({
    id: DataTypes.STRING,
    username: DataTypes.STRING,
    avatar_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GitUser',
  });
  return GitUser;
};