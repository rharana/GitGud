'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Repositories',
    [
        { id: '629148150', name: 'Rharana-Server', url: 'https://github.com/rharana/Rharana-Server', userId: '91393864'},
        { id: '711600335', name: 'gitgud', url: 'https://github.com/rharana/gitgud', userId: '91393864'},
    ], {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Repositories', null, {})
  }
};
