const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
//const thoughtsRoutes = require('./thoughtsRoutes');



// router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;






