const router = require("express").Router();

const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deletethoughts,
  createReactions,
  removeReactions,
} = require("../../controllers/thoughtsReactionsController.js");

router.route("/").get(getAllThoughts).post(createThoughts);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/reactions/<thoughtsId>
router.route("/:thoughtsId").post(addReaction);

// /api/comments/<thoughtsId>/<reactionsId>
router
  .route("/:thoughtsId/:reactionId")
  .put(addReaction)
  .delete(removeReaction);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route("/:usersId/:thoughtsId/:reactionsId").delete(removeReactions);

// /api/thoughts/<userId>
//router.route('/:userId').post(addThought);

// api/thoughts/<userId>/<thoughtID>

//router.route("/").get(getThoughts).post(createThought);
// /api/thoughts/:thoughtId
// router
//   .route("/:thoughtId")
//.get(getSingleThought)
//.put(updateThought)
// .delete(deleteThought);

//router.route("/userId/reactions").post(addReaction);

//router.route("/:userId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
