const multer = require("multer")
const fs = require("fs")
const path = require("path")
const { randomStringGenerator } = require("../utilities/helpers")
const { fileFilterType} = require("../config/constants.config")
// const { all } = require("../modules/user/user.router")

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // const __dirname = path.resolve();
    // where you want to upload your file.
    const dir = path.join(__dirname+ "../../public/uploader/" + req.uploadPath)
    // const dir = __dirname + '../../public/uploader/' + req.uploadPath
    // const dir = path.resolve(path.join(__dirname, 'upload');
    // const route = path.join(__dirname + '/public/uploader', req.uploadPath)
    if(!fs.existsSync(dir)) {
      fs.mkdir(dir, { recrusive: true }, err =>{});
    }
    cb(null, dir)
  },

  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop()
    const filename = randomStringGenerator(40)+"."+ext;
    cb(null, filename)
  }
})


const uploadFile = (fileType = fileFilterType.IMAGE) => {
  let allowed = ['jpg','png','jpeg', 'svg', 'bmp', 'webp','gif']

  if (fileType === fileFilterType.DOCUMENT) {
    allowed = ['doc','docx','pdf','csv','xlsx','txt']
  } else if(fileType === fileFilterType.VIDEO){
    allowed = ['mp4','mov','wav','mkv']
  }
  return  multer({
      storage: myStorage,
      limits: {
        fileSize: 3000000
      },
    
      fileFilter: (req, file, cb) => {
        const ext = file.originalname.split(".").pop()
    
        if (allowed.includes(ext.toLowerCase())) {
          cb(null, true)
        } else {
          cb({code: 400, message:"File format not supported"}, false)
        }
      }
    })
}

const setPath = (path) => {
  return (req, res, next) => {
    req.uploadPath = path;
    next()
  }
}

module.exports = {
  uploadFile, setPath
}