import express from 'express';
import dotenv from 'dotenv';
import appClientes from './routers/clientes.js'

dotenv.config();
const app = express();

const config = JSON.parse(process.env.MY_SERVER);

app.use('/clientes',appClientes)

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})