const { Thought, Reaction } = require("../models");

const thoughtsReactionsController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then((dbThoughtsData) => res.json(dbThoughtsData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Get all thoughts
  // getAllThought(req, res) {
  //   Thought.find()
  //     .then((thought) => res.json(thought))
  //     .catch((err) => res.status(500).json(err));
  // },
  // Get a thought
  // get one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID" })
          return;
        }
        res.json(thought)
      })
      .catch((err) => res.status(500).json(err));
    // },

    // deleteThought({ params }, res) {
    //   Thought.findOneAndDelete({ _id: params.id })
    //     .then(dbThoughtData => res.json(dbThoughtData))
    //     .catch(err => res.json(err));
  },

  // Update a thought
  updateThought({ body, params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id }, body, {
      new: true
    }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a reaction
  // createReaction(req, res) {
  //   Reaction.create(req.body)
  //     .then((reaction) => res.json(reaction))
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
  // // Delete a reaction
  // deleteReaction(req, res) {
  //   Reaction.findOneAndDelete({ _id: req.params.reactionId })
  //     .then((reaction) =>
  //       !reaction
  //         ? res.status(404).json({ message: "No reaction with that ID" })
  //         : User.deleteMany({ _id: { $in: reaction.users } })
  //     )
  //     .then(() => res.json({ message: "Reaction deleted!" }))
  //     .catch((err) => res.status(500).json(err));
  // },
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought frind with ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought find with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtsReactionsController;
