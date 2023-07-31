import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appSucursalCantidad = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appSucursalCantidad.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appSucursalCantidad.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT Nombre,SUM(Sucursal_Automovil.Cantidad_Disponible) AS total FROM Sucursal
                INNER JOIN Sucursal_Automovil 
                ON Sucursal.ID_Sucursal=Sucursal_Automovil.ID_Sucursal
                GROUP BY Sucursal.Nombre;`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appSucursalCantidad