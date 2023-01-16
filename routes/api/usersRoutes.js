const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/usersController");

router.route("/").get(getAllUser);

router.route("/:id").get(getUserById);

//router.route('/userId/friends').post(addFriend);

//router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
