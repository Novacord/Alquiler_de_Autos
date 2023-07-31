import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const empleadosRol = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

empleadosRol.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

empleadosRol.get('/', (req, res)=>{
    if(req.query.rol == "Gerente"){
        con.query(
            /*sql*/`SELECT * FROM Empleado
                    WHERE Cargo = "Gerente"`,
            (err, data)=>{
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            }
        )
    }else if(req.query.rol == "Asistente"){
        con.query(
            /*sql*/`SELECT * FROM Empleado
                    WHERE Cargo = "Asistente"`,
            (err, data)=>{
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            }
        )
    }

})

export default empleadosRol