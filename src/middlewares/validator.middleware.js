const { deleteFile } = require("../utilities/helpers")

const bodyvalidator = (schema) => {
  return  async(req, res, next) => {
    try {
      const data = req.body
      if(req.file){
        data[req.file.fieldname] = req.file.filename
      } else if(req.files) {
        // 
      }
      // data validate
      await schema.validateAsync(data, {abortEarly: false})
      next()
    } catch (exception) {
      let detail = {}

      //file delete

      if(req.file) {
        deleteFile("." + req.path.file)
      }

      exception.details.map((error) => {  // return value and index returned from detail key and alos this is cb
        detail[error['path'][0]] = error.message
        console.log(error)
      })

      next({status: 400, detail: detail})
    }

  }
}

module.exports = {
  bodyvalidator
}