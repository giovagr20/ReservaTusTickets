const {Schema, model} = require('mongoose');

const _reservaSchema = new Schema({

    user:String,
    ticket: String,
    quantity: Number,
    date: Date,

});

module.exports = model('Reservas', _reservaSchema);