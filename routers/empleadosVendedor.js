import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appEmpleadosVendedor = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appEmpleadosVendedor.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appEmpleadosVendedor.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Empleado
                WHERE Cargo="vendedor"`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appEmpleadosVendedor