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

routes.post("/reserva-tickets", async(req,res)=>{
    const reserva = new _reservaSchema(req.body)
    await reserva.save()
    res.redirect("/reservas-tickets")
})

routes.get("/ver-reservas-activas", async(req,res)=>{
    const reservas = await _reservaSchema.find()
    let message = {
        error: '',
        json: ''
    };
    res.render("reservas/reservas-activas.ejs",{reservas})
})
module.exports = routes;
