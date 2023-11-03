/* eslint-disable linebreak-style */
'use strict'
const {
	Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Repository extends Model {
		static associate(models) {
			Repository.belongsTo(models.GitUser, { foreignKey: 'userId' })
			Repository.hasMany(models.Commit)
		}
	}
	Repository.init({
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		name: DataTypes.STRING,
		url: DataTypes.STRING,
		userId: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Repository',
	})
	return Repository
}