'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('GitUsers',
    [
        { id: '91393864', username: 'rharana', avatar_url: 'https://avatars.githubusercontent.com/u/91393864?v=4'}
    ], {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GitUsers', null, {})
  }
};
