import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import middlewareAlquiler from '../middlewares/middlewareAlquiler.js'

dotenv.config();
const appClienteDNI = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appClienteDNI.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appClienteDNI.get('/:id',middlewareAlquiler,(req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Cliente
                WHERE DNI=?`,req.params.id,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appClienteDNI