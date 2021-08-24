const express = require('express');
const mongoose = require('mongoose');

const cliente = require('./routes/cliente');
const fornecedor = require('./routes/fornecedor');
const produto = require('./routes/produto');
const venda = require('./routes/venda');

const app = express();

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/clientes',  {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão ao MongoDB'))

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/clientes', cliente);
app.use('/fornecedores', fornecedor);
app.use('/produto', produto);
app.use('/venda', venda);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado com sucesso na porta: ${port}`)
})

