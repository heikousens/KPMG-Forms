var mongoose = require('mongoose');
Schema = mongoose.Schema;

const VendaSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    nomeProduto: { type: String, required: true, max: 100 },
    precoVenda: { type: String },
    vendaCliente: { type: String, required: true },
})

module.exports = mongoose.model('Venda', VendaSchema);