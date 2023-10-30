module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Issue', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      uid: {
        allowNull: false,
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
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.STRING
      },
      closed_at: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'Repository',
          key: 'id'
        }
      },
      authorId: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'Repository',
          key: 'id'
        }
      },
      assigneeId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'GitUser',
          key: 'id'
        }
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Issue')
  }
}
