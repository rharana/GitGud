'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Commits',
    [
      { id: '237883c6782875f71d3407f4bdea6442a643f8be', title: null, message: 'Sonar Integration 2', author_name: 'rharana', authored_date: '2023-10-23T16:05:46Z', commiter_name: 'rharana', commited_date: '2023-10-23T16:05:46Z', url: 'https://github.com/rharana/Rharana-Server/commit/237883c6782875f71d3407f4bdea6442a643f8be', repositoryId: '629148150'},
      { id: 'a8b1fc61f4397e3b1e982d70586f683567003ab3', title: null, message: 'Sonar Integration\n\nSonar Integration', author_name: 'rharana', authored_date: '2023-10-23T16:04:08Z', commiter_name: 'rharana', commited_date: '2023-10-23T16:04:08Z', url: 'https://github.com/rharana/gitgud/commit/9c262f02d31018f6361057eb4dfe412874d86de2', repositoryId: '629148150'},
    ], {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Commits', null, {})
  }
};
