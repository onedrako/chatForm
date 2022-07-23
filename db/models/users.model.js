const { Model, DataTypes } = require('sequelize')

const USER_TABLE = 'users_test_gabriel_hernandez_valdez'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  paternalSurName: {
    allowNull: false,
    field: 'paternal_surname',
    type: DataTypes.STRING,
    unique: true
  },
  maternalSurName: {
    allowNull: false,
    field: 'maternal_surname',
    type: DataTypes.STRING,
    unique: true
  },
  dateOfBirth: {
    allowNull: false,
    field: 'date_of_birth',
    type: DataTypes.DATE
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}

class User extends Model {
  static associate () {
  //
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { User, UserSchema, USER_TABLE }
