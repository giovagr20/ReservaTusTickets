const{Router}=require("express")
const express= require("express")
const router=express.Router()
const Tarea=require("../models/tareas")


router.get("/", (req, res) => {
    res.render("index");
  });
/*
  router.get("/disponibilidades", (req, res) => {
    res.render("disponibilidades/index");
  });
*/
router.get("/disponibilidades",async(req,res)=>{
    const tareas= await Tarea.find() 
    console.log(tareas)
    res.render("disponibilidades/index",{tareas})
})

/*
router.get("/",async(req,res)=>{
    const tareas= await Tarea.find() 
    console.log(tareas)
    res.render("index",{tareas})
})*/

router.post("/agregarActividad", async(req,res)=>{
    const tarea = new Tarea(req.body)
    await tarea.save()
    console.log(req.body)
    res.redirect("/disponibilidades")
})

router.get("/cambiarEstado/:id",async(req,res)=>{
   const tareaBuscada= await Tarea.findById(req.params.id)
   tareaBuscada.estado=!tareaBuscada.estado
   await tareaBuscada.save()
   res.redirect("/disponibilidades")

})
router.get("/eliminar/:id",async(req,res)=>{
   const id =req.params.id
   await Tarea.remove({_id:id})
   res.redirect("/disponibilidades")


})

router.get("/editar/:id",async(req,res)=>{

    const {id}=req.params
    const tarea= await Tarea.findById(id)
    console.log(tarea.descripcion)
    res.render("edit",{tarea})

})

router.post("/editar/:id",async(req,res)=>{
    const {id}=req.params
    await Tarea.update({_id:id},req.body)
    res.redirect("/disponibilidades")

})

module.exports=router;