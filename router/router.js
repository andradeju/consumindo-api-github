const express = require('express');
const router = express.Router();//recebendo as propriedades p/ receber as rotas
const controller = require('../controller/controller');

router.get('/ProcuraPerfil/GitHub/:name', controller.procuraPerfilGitHub);

module.exports = router;