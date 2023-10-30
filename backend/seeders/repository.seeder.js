'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Repository',
    [
        { name: 'Amazon', url: 'http://amazon.com'},
        { name: 'Google', url: 'http://google.com'},
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Repository', null, {})
  }
}