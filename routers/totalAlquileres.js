import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appTotalAlquileres = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appTotalAlquileres.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appTotalAlquileres.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT count(*) AS TotalAlquileres FROM Alquiler;`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appTotalAlquileres