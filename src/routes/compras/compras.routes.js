const express = require("express");
const routes = express.Router();
const _compraSchema = require("./compras.model");
const _reservaSchema = require('../reservas/reservas.model');
const Swal = require('sweetalert2');
let idSchema = undefined;

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/compras-tickets", (req, res) => {
  let message = {
    id: idSchema,
    error: '',
    json: ''
  };
  res.render("compras/compras-tickets", { message });
});

routes.get('/compras-tickets/:id', async (req, res) => {
  idSchema = undefined;
  idSchema = await _reservaSchema.findById(req.params.id);
  let message = {
    id: idSchema,
    error: '',
    json: ''
  };
  console.log(message);
  res.render('compras/compras-tickets', {message})
});

routes.post("/api/compras-tickets", async (req, res) => {
  const { creditCard, expireDate, price, quantity } = req.body;
  const dataSave = {
    reserva: idSchema,
    creditCard: creditCard,
    expireDate: expireDate,
    price: price,
    quantity: quantity
  };

  let message = {
    id: idSchema,
    error: '', 
    json: ''
  };
  if (!creditCard || !expireDate || !price || !quantity) {
    message.error = 'Ha ocurrido un error';
    await res.render("compras/compras-tickets", { message });
  }

  const compra = new _compraSchema(dataSave);

  await compra.save();

  message.json = JSON.stringify(compra);

  await res.render('compras/compras-tickets', { message });
});


routes.get('/ver-mis-compras', async (req, res) => {
  let compras = await _compraSchema.find().populate({path:'reserva', model: 'Reservas'}).exec();
  res.render('compras/ver-mis-compras', {compras}); 
});

module.exports = routes;
