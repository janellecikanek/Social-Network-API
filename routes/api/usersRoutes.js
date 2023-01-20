const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/usersController");

// /api/users
router
.route("/")
.get(getAllUser)
.post(createUser);

// /api users/:id
router
.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/userId/friends');

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
