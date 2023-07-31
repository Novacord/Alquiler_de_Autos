import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appAlquilerUsuario = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAlquilerUsuario.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAlquilerUsuario.get('/',(req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Cliente
                INNER JOIN Alquiler 
                ON Cliente.ID_Cliente=Alquiler.ID_Cliente`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})


export default appAlquilerUsuario