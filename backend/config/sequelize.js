/* eslint-disable quotes */
const { Sequelize } = require('sequelize')

const databaseHost = "127.0.0.1"
const databasePort = "3306"
const databaseUsername = "root"
const databasePassword = "root"
const databaseName = "gitgud"

module.exports = {
	initSequelize: () => {
		return new Sequelize(databaseName, databaseUsername, databasePassword, {
			host: databaseHost,
			port: databasePort,
			dialect: 'mysql'
		})
	}
}