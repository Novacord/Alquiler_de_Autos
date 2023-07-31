import {Router} from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const appReservasPendientes = Router();

const config = JSON.parse(process.env.MY_CONNECTION);

let con = undefined;

appReservasPendientes.use((req,res,next)=>{
    con = mysql.createPool(config);
    next();
})

appReservasPendientes.get('/', (req, res)=>{
    con.query(
        /*sql*/`SELECT * FROM Reserva
                INNER JOIN Cliente ON Reserva.ID_Cliente = Cliente.ID_Cliente
                INNER JOIN Automovil ON Reserva.ID_Automovil = Automovil.ID_Automovil
                WHERE Estado = "Reservado"`,
        (err, data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        }
    )
})

export default appReservasPendientes