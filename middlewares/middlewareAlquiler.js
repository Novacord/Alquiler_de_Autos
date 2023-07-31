import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validarIdAlquiler} from '../controller/validarIdAlquiler.js';
import {validate} from 'class-validator';

const proxyAlquiler = express();
proxyAlquiler.use('/:id',async(req,res,next)=>{
    try {
        let data = plainToClass(validarIdAlquiler, req.params, { excludeExtraneousValues: true });
        console.log(data);
        req.params = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default proxyAlquiler;
