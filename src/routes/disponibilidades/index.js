const{Router}=require("express")
const express= require("express")
const router=express.Router()
const Dispo=require("../models/dispoSchema");
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=es-MX&query="'



router.get("/", (req, res) => {
    res.render("index");
  });
  router.post("/agregarDisponibilidad", async(req,res)=>{
    console.log(req.body);

    const dispo = new Dispo(req.body)
    await dispo.save()
    console.log(req.body)
    res.redirect("/disponibilidades")
})


  router.get("/disponibilidades", (req, res) => {
    res.render("disponibilidades/index");
  });

module.exports=router;