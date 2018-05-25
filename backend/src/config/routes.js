const express = require('express');

module.exports = function(server) {
    // API Routes
    const router = express.Router();
    server.use('/api', router);

    //APOSTA Routes
    const apostaService = require('../api/aposta/apostaService');
    apostaService.register(router, '/apostas');

    //MEME Routes
    const memeService = require('../api/meme/memeService');
    memeService.register(router, '/memes');

    //FRASE Routes
    const fraseService = require('../api/frase/fraseService');
    fraseService.register(router, '/frases');

    //CUSTOM Routes
    require('../api/custom/homeRoute')(router);
};
