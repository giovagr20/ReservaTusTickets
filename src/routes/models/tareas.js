const mongoose=require("mongoose")
const Schema=mongoose.Schema

const SchemaTareas=new Schema({
    Titulo:{type: String,required : true },
    descripcion:String,
    estado:{type:Boolean,default:false}
})

module.exports=mongoose.model("Tarea",SchemaTareas)
