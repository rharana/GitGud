module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Label', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      issueId: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Issue'
          },
          key: 'id'
        }
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Label')
  }
}
