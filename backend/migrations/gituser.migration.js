module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GitUser', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      avatar_url: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GitUser')
  }
}