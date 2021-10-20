// Importar  paquetes
const express= require("express")
const morgan= require("morgan")
const mongoose=require("mongoose")
const path=require("path")
//importando routes
const Routes=require("./routes/disponibilidades/index")
const { dirname } = require("path")


//conexion a la base de datos

mongoose.connect("mongodb://localhost/personas").then(db=>{
    console.log("Base de datos conectada")
}).catch(err=>console.error(err))


const app= express()

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



