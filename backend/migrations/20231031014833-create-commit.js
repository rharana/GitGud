/* eslint-disable linebreak-style */
'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Commits', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			title: {
				type: Sequelize.STRING
			},
			message: {
				type: Sequelize.STRING
			},
			author_name: {
				type: Sequelize.STRING
			},
			authored_date: {
				type: Sequelize.STRING
			},
			commiter_name: {
				type: Sequelize.STRING
			},
			commited_date: {
				type: Sequelize.STRING
			},
			url: {
				type: Sequelize.STRING
			},
			repositoryId: {
				type: Sequelize.STRING,
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
				references: {
					model: {
						tableName: 'Repositories'
					},
					key: 'id'
				}
			}
		})
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Commits')
	}
}