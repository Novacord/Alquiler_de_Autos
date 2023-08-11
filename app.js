import express from 'express';
import dotenv from 'dotenv';
import appClientes from './routers/clientes.js'
import appAutomovilesDisponibles from './routers/automovilesDisponibles.js';
// import appAlquileresActivos from './routers/alquileresActivos.js';
// import appReservasPendientes from './routers/reservasPendientes.js';
// import appAlquiler from './routers/alquiler.js';
// import appEmpleadosVendedor from './routers/empleadosVendedor.js';
// import appAutomovilSurcursal from './routers/automovilSurcursal.js';
// import appAlquilerCosto from './routers/alquilerCosto.js';
// import appClienteDNI from './routers/clienteDNI.js';
// import appMostrarMayor5 from './routers/mostrarMayor5.js';
// import appAlquilerFecha from './routers/alquiler2023-07-05.js';
// import appReservasPendientesC from './routers/reservasPendientesCliente.js';
// import appEmpleadosRol from './routers/empleadosRol.js'
// import appAlquilerUsuario from './routers/alquilerUsuario.js';
// import appAutomoviles from './routers/automoviles.js';
// import appSucursalCantidad from './routers/sucursalCantidad.js';
// import appTotalAlquileres from './routers/totalAlquileres.js';

dotenv.config();
const app = express();

const config = JSON.parse(process.env.MY_SERVER);

app.use('/clientes',appClientes);
app.use('/automovilesDisponibles',appAutomovilesDisponibles);
// app.use('/alquileresActivos', appAlquileresActivos);
// app.use('/reservasPendientes',appReservasPendientes);
// app.use('/alquiler', appAlquiler);
// app.use('/empleadosVendedor', appEmpleadosVendedor);
// app.use('/automovilSurcursal', appAutomovilSurcursal);
// app.use('/appAlquilerCosto',appAlquilerCosto);
// app.use('/clienteDNI', appClienteDNI);
// app.use('/mostrarCapacidadMas5', appMostrarMayor5);
// app.use('/alquilerFecha',appAlquilerFecha);
// app.use('/reservasPendientesCliente', appReservasPendientesC)
// app.use('/empleadosRol', appEmpleadosRol); 
// app.use('/alquilerUsuario', appAlquilerUsuario);
// app.use('/automoviles', appAutomoviles);
// app.use('/sucursalCantidad', appSucursalCantidad);
// app.use('/totalAlquileres', appTotalAlquileres);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

