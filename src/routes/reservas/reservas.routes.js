const express = require("express");
const routes = express.Router();
const _reservaSchema = require("./reservas.model");

routes.get("/", (req, res) => {
    console.log("entra");
  res.render("index");
});

routes.get("/reservas-tickets", (req, res) => {
    let message = {
      error: '',
      json: ''
    };
    res.render("reservas/reservas-tickets", { message });
  });


module.exports = routes;
