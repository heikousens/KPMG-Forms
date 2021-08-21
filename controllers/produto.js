const Produto = require('../models/produto');

exports.test = (req, res) => res.send('Teste realizado com sucesso')

exports.produto_create = (req, res, next) => {
    let produto = new Produto({
        _id: parseInt(req.body.id),
        fabricante: req.body.fabricante,
        modelo: req.body.modelo,
        preco: req.body.preco,
        ano: req.body.ano,
    });
    produto.save((err) => {
        if(err){
            return next(new Error(`Ocorreu um erro: ${err}`))
        }
        res.send('Produto cadastrado com sucesso!')
    })
}

exports.produto_details = (req, res, next) => {
    Produto.findById(req.params.id, (err, produto) => {
        if (err) return next(new Error(`Ocorreu um erro: ${err}`));
        res.send(produto);
    })
}

exports.produto_update = (req, res, next) => {
    Produto.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
        if (err) return 
            next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Produto alterado!')
    })
}

exports.produto_delete = (req, res, next) => {
    Produto.findByIdAndRemove(req.params.id, (err => {
        if(err) return 
            next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Produto excluído!')
    }))
}