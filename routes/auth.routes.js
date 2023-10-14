const { Router } = require("express");
const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/auth.controllers.js');

router.post('/signup', ctrl.signUp);
router.post('/signin', ctrl.signIn);
router.post('/forgot-password', ctrl.forgotPassword)
router.post('/reset-password/:token', ctrl.resetPassword)


module.exports = router;
