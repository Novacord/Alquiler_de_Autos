import express from 'express';
import dotenv from 'dotenv';
import appClientes from './routers/clientes.js'
import appAutomovilesDisponibles from './routers/automovilesDisponibles.js';
import appAlquileresActivos from './routers/alquileresActivos.js';
import appReservasPendientes from './routers/reservasPendientes.js';
import appAlquiler from './routers/alquiler.js';
import appEmpleadosVendedor from './routers/empleadosVendedor.js';

dotenv.config();
const app = express();

const config = JSON.parse(process.env.MY_SERVER);

app.use('/clientes',appClientes);
app.use('/automovilesDisponibles',appAutomovilesDisponibles);
app.use('/alquileresActivos', appAlquileresActivos);
app.use('/reservasPendientes',appReservasPendientes);
app.use('/alquiler', appAlquiler);
app.use('/empleadosVendedor', appEmpleadosVendedor);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
