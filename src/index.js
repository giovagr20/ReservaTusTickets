const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const DB =  require('./database/database_connection');
const PORT = require('./database/utils/properties').PORT;
const _comprasRoutes = require('./routes/compras/compras.routes');
const _reservasRoutes = require('./routes/reservas/reservas.routes');
const _disponibilidadesRoutes = require("./routes/disponibilidades/index");
const legal = require("./routes/legal/index");
const nosotros = require("./routes/nosotros/index");
const contacto = require("./routes/contacto/index");
DB();

//Settings
app.set('port', PORT)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"))
app.use('/', _comprasRoutes);
app.use('/', _reservasRoutes);
app.use('/', _disponibilidadesRoutes);
app.use('/', legal);
app.use('/', nosotros);
app.use('/', contacto);

//RUN Server
app.listen(app.get('port'), () => {
    console.log(`Server in running on port ${app.get('port')}`);
})
