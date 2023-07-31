import express from 'express';
import dotenv from 'dotenv';
import appClientes from './routers/clientes.js'
import appAutomovilesDisponibles from './routers/automovilesDisponibles.js';

dotenv.config();
const app = express();

const config = JSON.parse(process.env.MY_SERVER);

app.use('/clientes',appClientes);
app.use('/automovilesDisponibles',appAutomovilesDisponibles);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})