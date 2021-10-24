const {Schema, model} = require("mongoose")


// const mongoose= require("mongoose")
// const Schema= mongoose.Schema

const SchemaDisponible=new Schema({
    movieSelect:Object,
    estado:{type:Boolean,default:true,required:true},
    sala:String,
    fechaEstreno:Date,
    fechaFinal:Date,
    siete_am:String,
    ocho_am:String,
    nueve_am:String,
    diez_am:String,
    once_am:String,
    doce_am:String,
    una_pm:String,
    dos_pm:String,
    tres_pm:String,
    cuatro_pm:String,
    cinco_pm:String,
    seis_pm:String,
    siete_pm:String,
    ocho_pm:String,
    nueve_pm:String,
    diez_pm:String,
    once_pm:String,
    doce_pm:String
})

module.exports = model("Dispo",SchemaDisponible)
