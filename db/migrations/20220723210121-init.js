'use strict'

const { USER_TABLE } = require('../models/users.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      paternalSurname: {
        allowNull: false,
        field: 'paternal_surname',
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      maternalSurname: {
        allowNull: false,
        field: 'maternal_surname',
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      dateOfBirth: {
        allowNull: false,
        field: 'date_of_birth',
        type: Sequelize.DataTypes.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE)
  }
}
