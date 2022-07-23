const express = require('express')
const UserService = require('../services/users.service')

// const { createUserSchema, getUserSchema } = require('../schemas/users.schema')

const router = express.Router()
const service = new UserService()

router.get('/',
  async (req, res, next) => {
    try {
      const users = await service.find()
      res.send(users)
    } catch (err) {
      next(err)
    }
  }

)

module.exports = router
