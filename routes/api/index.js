const router = require('express').Router();
const friendsRoutes = require('./friendsRoutes');
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionsRoutes = require('./reactionsRoutes');


router.use('/friends', friendsRoutes);
router.use('/thoughtss', thoughtsRoutes);
router.use('/usess', usesRoutes);

module.exports = router;






