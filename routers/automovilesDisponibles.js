import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appAutomovilesDisponibles = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAutomovilesDisponibles.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAutomovilesDisponibles.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Automovil
                INNER JOIN Sucursal_Automovil
                ON Automovil.ID_Automovil=Sucursal_Automovil.ID_Automovil`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appAutomovilesDisponibles