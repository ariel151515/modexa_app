const { Router } = require("express");
const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/tipoDeEvento.controllers.js');

router.post('/agregatipodeevento', ctrl.postTipoDeEvento);
router.delete('/eliminar/:id', ctrl.eliminarTipoDeEvento);
router.get('/eventos', ctrl.getEventos);

module.exports = router;
