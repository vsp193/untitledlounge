const restful = require('node-restful');
const mongoose = restful.mongoose;

const apostaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
    opcoes: [ String ]
});

module.exports = restful.model('Aposta', apostaSchema);
