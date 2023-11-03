'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Issues', {
      id: {
        type: Sequelize.STRING,
      },
      uid: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.STRING
      },
      closed_at: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
        references: {
          model: {
            tableName: 'Repositories'
          },
          key: 'id'
        }
      },
      authorId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
        references: {
          model: {
            tableName: 'GitUsers'
          },
          key: 'id'
        }
      },
      assigneeId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
        references: {
          model: {
            tableName: 'GitUsers'
          },
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Issues');
  }
};