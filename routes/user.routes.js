const { Router } = require("express");
const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/user.controllers.js');

router.get('/user/:id', ctrl.getUser);

module.exports = router;
