'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repository extends Model {
    static associate(models) {
      Repository.belongsTo(models.GitUser, { foreignKey: 'userId' });
      Repository.hasMany(models.Commit);
    }
  }
  Repository.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Repository',
  });
  return Repository;
};