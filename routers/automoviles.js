import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appAutomoviles = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appAutomoviles.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appAutomoviles.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT Marca,Modelo FROM Automovil`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appAutomoviles