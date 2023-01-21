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


//router.route("/:thoughtsId").post(addReaction);

// /api/comments/<thoughtsId>/<reactionsId>
router
  .route("/:thoughtsId/reactions")
  .put(createReaction)
  .delete(deleteReaction);

//router.route("/:usersId/:thoughtsId/:reactionsId").delete(removeReaction);

//router.route("/userId/reactions").post(addReaction);

//router.route("/:userId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
