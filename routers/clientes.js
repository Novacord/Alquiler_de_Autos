import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appClientes = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appClientes.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appClientes.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Cliente`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appClientes