const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class UserService {
  async find () {
    const users = await models.User.findAll()
    if (!users) {
      throw boom.notFound('Users not found on database')
    }
    return users
  }

  async findById (id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('User not found on database')
    }
    return user
  }

  async create (user) {
    const newUser = await models.User.create(user)
    return newUser
  }
}

module.exports = UserService
