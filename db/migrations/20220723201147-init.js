'use strict'

const { USER_TABLE } = require('../models/users.model')

module.exports = {
  async up (queryInterface, Sequelize) {
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
      paternalSurName: {
        allowNull: false,
        field: 'paternal_surname',
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      maternalSurName: {
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
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
  }
}
