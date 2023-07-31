import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();
const appMostrarMayor5 = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appMostrarMayor5.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appMostrarMayor5.get('/',(req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Automovil
                WHERE Capacidad>5`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appMostrarMayor5