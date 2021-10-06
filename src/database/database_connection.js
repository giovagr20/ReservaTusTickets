const mongoose = require('mongoose');
const URI = require('./utils/properties').DB;

module.exports = ()=> {
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`DB Connected on ${URI}`))
    .catch((error) => console.log(`Error connection ${error}`));

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log(`DB disconnected`);
            process.exit(0)
        });
    });
}