/* eslint-disable linebreak-style */
'use strict'
const {
	Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Commit extends Model {
		static associate(models) {
			Commit.belongsTo(models.Repository, { foreignKey: 'repositoryId' })
		}
	}
	Commit.init({
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		title: DataTypes.STRING,
		message: DataTypes.STRING,
		author_name: DataTypes.STRING,
		authored_date: DataTypes.STRING,
		commiter_name: DataTypes.STRING,
		commited_date: DataTypes.STRING,
		url: DataTypes.STRING,
		repositoryId: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Commit',
	})
	return Commit
}