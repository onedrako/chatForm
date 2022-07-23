const express = require('express')

// const UserService = require('../services/users.service')

// const { createUserSchema, getUserSchema } = require('../schemas/users.schema')

const router = express.Router()
// const service = new UserService()

router.get('/',
  (req, res) => {
    res.json({ message: 'Hello World!' })
  }
)

module.exports = router
