const {Schema, model} = require("mongoose")


// const mongoose= require("mongoose")
// const Schema= mongoose.Schema

const SchemaDisponible=new Schema({
    estado:{type:Boolean,default:true,required:true},
    sala:String,
    fechaEstreno:Date,
    fechaFinal:Date

})

module.exports = model("Dispo",SchemaDisponible)
