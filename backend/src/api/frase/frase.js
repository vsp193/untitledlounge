const restful = require('node-restful');
const mongoose = restful.mongoose;

const fraseSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = restful.model('Frase', fraseSchema);
