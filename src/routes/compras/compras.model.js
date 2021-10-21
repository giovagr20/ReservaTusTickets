const {Schema, model} = require('mongoose');
const _reservaSchema = require('../reservas/reservas.model');

const _compraSchema = new Schema({

    reserva: {type: Schema.ObjectId, ref: 'Reservas'},
    creditCard: String,
    expireDate: String,
    isCompra: Boolean,
    price: Number,
    quantity: Number

});

module.exports = model('Compras', _compraSchema);