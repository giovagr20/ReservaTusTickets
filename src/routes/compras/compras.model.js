const {Schema, model} = require('mongoose');

const _compraSchema = new Schema({

    creditCard: String,
    expireDate: String,
    isCompra: Boolean,
    price: Number,
    quantity: Number

});

module.exports = model('Compras', _compraSchema);