const bcrypt = require("bcryptjs")

class UserController {
  /**
   * 
   * @param {Request} req 
   * @param {import { response } from "express";} res 
   * @param {import { nextfunction } from "express";} next 
   */
  userCreate = (req, res, next) => {
    const data = req.body;

    if (req.file) {
      data.image = req.file.filename;
    }

    data.password = bcrypt.hashSync(data.password, 10)

    bcrypt.compareSync(data.confirmPassword, data.password)

    // delete data.confirmPassword
    // delete data.password

    res.json({
      result:data,
      message: "create",
      meta: null
    })
  }

  userList = (req, res, next) => {
    res.json({
      result:null,
      message: "create",
      meta: null
    })
  }

  userDetailById = (req, res, next) => {
    res.json({
      result:null,
      message: "create",
      meta: null
    })
  }

  userUpdate = (req, res, next) => {
    res.json({
      result:null,
      message: "create",
      meta: null
    })
  }

  userDelete = (req, res, next) => {
    res.json({
      result:null,
      message: "create",
      meta: null
    })
  }

  user

  
}

const userCtrl = new UserController()

module.exports = userCtrl;