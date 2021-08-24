const Venda = require('../models/venda');

exports.test = (req, res) => res.send('Teste realizado com sucesso')

exports.venda_create = (req, res, next) => {
    let venda = new Venda({
        _id: parseInt(req.body.id),
        nomeProduto: req.body.nomeProduto,
        precoVenda: req.body.precoVenda,
        vendaCliente: req.body.vendaCliente,
    });
    venda.save((err) => {
        if(err){
            return next(new Error(`Ocorreu um erro: ${err}`))
        }
        res.send('Venda cadastrado com sucesso!')
    })
}

exports.venda_details = (req, res, next) => {
    Venda.findById(req.params.id, (err, venda) => {
        if (err) return next(new Error(`Ocorreu um erro: ${err}`));
        res.send(venda);
    })
}

exports.venda_update = (req, res, next) => {
    Venda.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,venda) => {
        if (err) return 
            next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Venda alterado!')
    })
}

exports.venda_delete = (req, res, next) => {
    Venda.findByIdAndRemove(req.params.id, (err => {
        if(err) return 
            next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Venda excluído!')
    }))
}