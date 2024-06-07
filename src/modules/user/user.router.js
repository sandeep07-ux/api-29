const router = require("express").Router();
const userCtrl = require("./user.controller")
const loginCheck = require("../../middlewares/auth.middleware");
const hasPermission = require("../../middlewares/rbac.middleware");
const { setPath, uploadFile } = require("../../middlewares/uploader.middleware");
const {  fileFilterType} = require("../../config/constants.config");
const { bodyvalidator } = require("../../middlewares/validator.middleware");
const { userCreateDTO } = require("./user.request");
// app.use((req, res) => (
//   res.end("Hello")
// ))

// request url route, API End point, 



// router.use(loginCheck);
router.route("/")
  // .post(hasPermission,  userCtrl.userCreate)
  .post(hasPermission, setPath('user'), uploadFile(fileFilterType.IMAGE).single('profile'), bodyvalidator(userCreateDTO), userCtrl.userCreate)
  // .post(hasPermission, setPath('user'),  bodyvalidator(userCreateDTO), userCtrl.userCreate)
  .get(userCtrl.userList)

router.route("/:id")
  .get(userCtrl.userDetailById)
  .put(userCtrl.userUpdate)
  .delete(userCtrl.userDelete)

module.exports = router;

// stream (read)