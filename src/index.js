const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const DB =  require('./database/database_connection');
const PORT = require('./database/utils/properties').PORT;
DB();

//Settings
app.set('port', PORT)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//TODO: Implementar cada uno los middleware de sus routes aquí

//RUN Server
app.listen(app.get('port'), () => {
    console.log(`Server in runnig on port ${app.get('port')}`);
})