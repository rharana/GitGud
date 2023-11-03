'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    static associate(models) {
      Label.belongsTo(models.Label, { foreignKey: 'issueId' });
    }
  }
  Label.init({
    id: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    issueId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};