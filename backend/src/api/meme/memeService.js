const Meme = require('./meme');

Meme.methods(['get', 'post', 'put', 'delete']);
Meme.updateOptions({ new: true, runValidators: true });

module.exports = Meme;
