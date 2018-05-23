const restful = require('node-restful');
const mongoose = restful.mongoose;

const memeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
    imagemUrl: { type: String, required: false }
});

module.exports = restful.model('Meme', memeSchema);
