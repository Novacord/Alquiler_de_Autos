import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validarIdAlquiler {

    @Expose({ name: 'id' })
    @Transform(({ value }) =>{
      let data = /^[0-9]+$/g.test(value);
      if(data && typeof value == "string") return String(value);
      else throw {status: 401, message: "debe ser un numero"}
    })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id es obligatorio`}}})
    id: number;
    constructor(
      id:number, 
        ) {
      this.id= id;
    }
}