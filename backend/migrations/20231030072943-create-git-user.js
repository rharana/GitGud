/* eslint-disable linebreak-style */
'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('GitUsers', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			username: {
				type: Sequelize.STRING
			},
			avatar_url: {
				type: Sequelize.STRING
			}
		})
	},
	async down(queryInterface) {
		await queryInterface.dropTable('GitUsers')
	}
}