const express = require("express");
const routes = express.Router();
const _compraSchema = require("./compras.model");

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/compras-tickets", (req, res) => {
  let message = {
    error: '',
    json: ''
  };
  res.render("compras/compras-tickets", { message });
});

routes.post("/api/compras-tickets", async (req, res) => {
  const { creditCard, expireDate, price, quantity } = req.body;

  const dataSave = {
    creditCard: creditCard,
    expireDate: expireDate,
    price: price,
    quantity: quantity
  };

  let message = {
    error: '', 
    json: ''
  };
  if (!creditCard || !expireDate || !price || !quantity) {
    message.error = 'Ha ocurrido un error';
    console.log(message.error);
    res.render("compras/compras-tickets", { message });
  }

  const compra = new _compraSchema(dataSave);

  await compra.save();

  message.json = JSON.stringify(compra);

  await res.render('compras/compras-tickets', { message });
});
module.exports = routes;
