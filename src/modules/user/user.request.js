const Joi = require("joi");

// DTO (Data Transfer Object)

const userCreateDTO = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  address: Joi.string().optional().empty(),
  phone: Joi.string().min(10).max(15).optional(),
  password: Joi.string().min(8).max(25).required(),
  confirmPassword: Joi.string().equal(Joi.ref('password')).required().messages({
    "any.required": "password and confirmpassword should match"
  }),
  role: Joi.string().regex(/^(seller|customer)$/).required().messages({
    "any.required": "seller and customer only accepted"
  })
  // image: Joi.string()
})

module.exports = {
  userCreateDTO
}