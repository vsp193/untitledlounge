const Aposta = require('./aposta');

Aposta.methods(['get', 'post', 'put', 'delete']);
Aposta.updateOptions({ new: true, runValidators: true });

module.exports = Aposta;