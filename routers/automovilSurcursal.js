import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appAutomovilSurcursal = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAutomovilSurcursal.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAutomovilSurcursal.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT Nombre,Cantidad_Disponible FROM Sucursal 
                INNER JOIN Sucursal_Automovil  
                ON Sucursal.ID_Sucursal=Sucursal_Automovil.ID_Sucursal;"`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appAutomovilSurcursal