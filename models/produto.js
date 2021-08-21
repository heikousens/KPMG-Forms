var mongoose = require('mongoose');
Schema = mongoose.Schema;

const ProdutoSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    fabricante: { type: String },
    modelo: { type: String, required: true },
    preco: { type: String, required: true },
    ano: { type: String, required: true },
})

module.exports = mongoose.model('Produto', ProdutoSchema);