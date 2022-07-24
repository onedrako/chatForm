const express = require('express')

const { createUserSchema, getUserSchema } = require('../schemas/user.schema')
const validatorHandler = require('../middlewares/validatorHandler')

const UserService = require('../services/users.service')

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

router.get('/user/:id',
  validatorHandler(getUserSchema),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.findById(id)
      res.send(user)
    } catch (err) {
      next(err)
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = await service.create(req.body)
      res.send(user)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
