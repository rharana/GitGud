'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {

		await queryInterface.bulkInsert('Issues',
			[
				{id: '5', uid: '1681650646', title: 'Class component to hook migration', description: '', state: 'open', created_at: '2023-04-24T16:32:38Z', closed_at: null, ownerId: '629148150', authorId: '91393864', assigneeId: '91393864'},
				{id: '4', uid: '1681617799', title: 'Exception Management ', description: '', state: 'open', created_at: '2023-04-24T16:09:35Z', closed_at: null, ownerId: '629148150', authorId: '91393864', assigneeId: '91393864'},
			], {})

	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Issues', null, {})
	}
}
