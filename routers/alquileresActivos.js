import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appAlquileresActivos = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAlquileresActivos.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAlquileresActivos.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Alquiler
                INNER JOIN Cliente ON Alquiler.ID_Cliente = Cliente.ID_Cliente
                WHERE Alquiler.Estado = "Activo"`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appAlquileresActivos