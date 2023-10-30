module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Repository', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'GitUser',
          key: 'id'
        }
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Repository')
  }
}
