const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentos = require('./swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocumentos));

module.exports = router;
