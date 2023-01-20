const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtsReactionsController");

//router.route("/").get(getAllThoughts).post(createThought);
// api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/reactions/<thoughtsId>
//router.route("/:thoughtsId").post(addReaction);

// /api/comments/<thoughtsId>/<reactionsId>
router
  .route("/:thoughtsId/reactions")
  .put(createReaction)
  .delete(deleteReaction);

// /api/comments/<pizzaId>/<commentId>/<replyId>
//router.route("/:usersId/:thoughtsId/:reactionsId").delete(removeReaction);

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
