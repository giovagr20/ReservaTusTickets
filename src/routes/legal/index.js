const{Router}=require("express")
const express= require("express")
const router=express.Router()
const Dispo=require("../models/dispoSchema")


router.get("/", (req, res) => {
    res.render("index");
  });
/*
  router.post("/agregarDisponibilidad", async(req,res)=>{
    const dispo = new Dispo(req.body)
    await dispo.save()
    console.log(req.body)
    res.redirect("/disponibilidades")
})
*/

  router.get("/legal", (req, res) => {
    res.render("legal/index");
  });

module.exports=router;