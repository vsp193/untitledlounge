const express = require('express');

module.exports = function(server) {
    // API Routes
    const router = express.Router();
    server.use('/api', router);

    //APOSTA Routes
    const apostaService = require('../api/aposta/apostaService');
    apostaService.register(router, '/apostas');
};