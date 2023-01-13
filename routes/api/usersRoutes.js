const router = require("express").Router();


const {getAllUser, getUserById} = require("../../controllers/usersController")

router.route("/").get(getAllUser)

router.route('/:id').get(getUserById)

module.exports = router