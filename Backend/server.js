const http =require('http');
const app = require('./app')
const server = http.createServer(app);
const mongoose = require('mongoose');
const db = 'mongodb://0.0.0.0/AQSU_SHOP'
mongoose.connect(db);

mongoose.connection.on('connected',(connected)=>[
    console.log('connected to database')
])

server.listen(3000,()=>{
    console.log('server is running')
})