const { string } = require('joi')
const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const secondName = string()
const paternalSurname = Joi.string()
const maternalSurname = Joi.string()
const dateOfBirth = Joi.date()
const email = Joi.string()
const phone = Joi.number()

const createUserSchema = Joi.object({
  name: name.required(),
  secondName: secondName.required(),
  paternalSurname: paternalSurname.required(),
  maternalSurname: maternalSurname.required(),
  dateOfBirth: dateOfBirth.required(),
  email: email.required(),
  phone: phone.required().min(10).max(10)
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, getUserSchema }
