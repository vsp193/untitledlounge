const Frase = require('./frase');

Frase.methods(['get', 'post', 'put', 'delete']);
Frase.updateOptions({ new: true, runValidators: true });

module.exports = Frase;
