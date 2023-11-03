/* eslint-disable linebreak-style */
'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Repositories', {
			id: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING
			},
			url: {
				type: Sequelize.STRING
			},
			userId: {
				type: Sequelize.STRING,
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
				references: {
					model: {
						tableName: 'GitUsers'
					},
					key: 'id'
				}
			}
		})
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Repositories')
	}
}