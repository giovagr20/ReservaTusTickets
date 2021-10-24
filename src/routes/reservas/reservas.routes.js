const express = require("express");
const routes = express.Router();
const _reservaSchema = require("./reservas.model");

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/reservas-tickets", (req, res) => {
  const reserva = new _reservaSchema(req.body)
  let message = {
    error: '', 
    json: ''
  };

  res.render("reservas/reservas-tickets", { message });
})

routes.post("/reserva-tickets/:id", async(req,res)=>{
  
  const nueva_reserva = new _reservaSchema(req.body)

  let message = {
    error: '', 
    json: ''
  };

  if (!req.params.user || !req.params.date || !req.params.ticket || !req.params.quantity) {
    console.log("entra a la validacion")
    message.error = 'Ha ocurrido un error';
    await res.render("reservas/reservas-tickets.ejs", { message });
  }else{
    if(req.params.id != 'insert'){
      const reserva = await _reservaSchema.findById(req.params.id)
      reserva.user = nueva_reserva.user
      reserva.date = nueva_reserva.date
      reserva.quantity = nueva_reserva.quantity
      reserva.ticket = nueva_reserva.ticket
      await reserva.save()
    }else{
      console.log("entra al else")
      await nueva_reserva.save()
    }
    await res.render("reservas/reservas-tickets.ejs", {message})
  }
})

routes.get("/ver-reservas-activas", async(req,res)=>{
    const reservas = await _reservaSchema.find()
    let message = {
        error: '',
        json: ''
    };
    res.render("reservas/reservas-activas.ejs",{reservas})
})

routes.get("/eliminar/:id", async(req,res)=>{
  const id = req.params.id
  await _reservaSchema.remove({_id:id})
  res.redirect("/ver-reservas-activas")
})

routes.get("/editar/:id", async(req,res)=>{
  const reserva = await _reservaSchema.findById(req.params.id)
    let message = {
      error: '',
      json: ''
  };

  message.json = reserva
  res.render("reservas/reservas-tickets",{message})
})


module.exports = routes;
