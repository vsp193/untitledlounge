const Aposta = require('../aposta/aposta');
const Frase = require('../frase/frase');
const Meme = require('../meme/meme');

module.exports = function(router) {
  router.get('/home', function(req, res, next) {
    var returnFrases;
    var returnApostas;
    var returnMemes;

    Aposta.find(function(err, apostas) { returnApostas = apostas; }).limit(4)
      .then(Frase.find(function(err, frases) { returnFrases = frases; }).limit(2)
      .then(Meme.find(function(err, memes) { returnMemes = memes; }).limit(4)
      .then(function() {
        res.send({
          apostas: returnApostas,
          frases: returnFrases,
          memes: returnMemes
        });
      })));
  });
};
