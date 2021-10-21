// Importar  paquetes
const express= require("express")
const morgan= require("morgan")
const app= express()
const mongoose=require("mongoose")
const path=require("path")
const DB=require('./database/database_connection')
const PORT= require('./database/utils/properties').PORT
const Routes=require("./routes/disponibilidades/index")
//const Dispo = require('./routes/disponibilidades/index')
DB()

//Settings
app.set("port",process.env.PORT||3000)
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+ "/public"))

//Routes
app.use("/",Routes)

// ejecutar servidor
app.listen(app.get("port"),()=>{
    console.log("Sevidor On en el puerto"+app.get("port"))
})
/*
//conexion a la base de datos
mongoose.connect("mongodb://localhost/disponibilidades").then(db=>{
    console.log("Base de datos conectada")
}).catch(err=>console.error(err))
*/




//importando routes

//const DB = require()
//const { dirname } = require("path")



