const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const secondName = Joi.string()
const paternalSurname = Joi.string()
const maternalSurname = Joi.string()
const dateOfBirth = Joi.date()
const email = Joi.string()
const phone = Joi.string()

const createUserSchema = Joi.object({
  name: name.required(),
  secondName,
  paternalSurname: paternalSurname.required(),
  maternalSurname: maternalSurname.required(),
  dateOfBirth: dateOfBirth.required(),
  email: email.required(),
  phone: phone.regex(/^[0-9]{10}$/)
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, getUserSchema }
