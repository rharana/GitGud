module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commit', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      authored_date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commiter_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commited_date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      repositoryId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
            model: 'Repository',
            key: 'id',
        }
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Commit')
  }
}