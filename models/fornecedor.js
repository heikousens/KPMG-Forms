var mongoose = require('mongoose');
Schema = mongoose.Schema;

const FornecedorSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    nome: { type: String, required: true, max: 100 },
    telefone: { type: String },
    email: { type: String, required: true },
    cnpj: { type: String, required: true },
})

module.exports = mongoose.model('Fornecedor', FornecedorSchema);