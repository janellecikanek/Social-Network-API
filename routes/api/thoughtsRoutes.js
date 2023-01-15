const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deletethought,
  createReaction,
  removeReaction,
} = require("../../controllers/thoughtsReactionsController.js");
// /api/thoughts
router.route("/").get(getThoughts).post(createThought);
// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/userId/reactions").post(addReaction);

router.route("/:userId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
