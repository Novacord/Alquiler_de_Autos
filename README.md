# Iniciar el proyecto

el proyecto contiene una configuración básica para un servidor Express utilizando la librería `dotenv` para gestionar variables de entorno. La configuración del servidor,  incluyendo el nombre del host y el puerto, se carga desde un archivo  JSON y se utiliza para iniciar el servidor.

- para poder utilizar las librerías utilizada deben instalarlas con npm:

```
npm i
```

- Crea un archivo `.env` en el directorio raíz del proyecto y agrega el siguiente contenido:

```
MY_SERVER={"hostname": "nombre del Host", "port": 3000}
MY_CONNECTION = { "host": "localhost", "user": "root", "password": "", "database": "barber", "port": 3306}
```

- para inicializar el servidor de express:

```
npm run dev
```

- Crea un archivo `tsconfig.json` con el el comando:

```
npx tsc --init
```

- y remplace todo el contenido del archivo con esta configuración:

```
{
  "compilerOptions": {
    "target": "es6",//Esta opción especifica la versión de ECMAScript
    "module": "ES6",//especifica el sistema de módulos que se utilizará al compilador 
    "moduleResolution": "node",//define cómo se resolverán los módulos al importarlos
    "outDir": "./controller",//especifica la carpeta de destino
    "esModuleInterop": true,//Esta opción habilita la interoperabilidad de módulos
    "experimentalDecorators": true,//Esta opción habilita el soporte para decoradores 
    "emitDecoratorMetadata": true//Esta opción habilita la generación de metadatos
  }
}
```

- para pasar el typescript a JavaScript es:

```
npm run tsc
```

## punto numero 2

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/clientes`
- Muestra todos los clientes registrados en la base de datos.

## punto numero 3

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/automovilesDisponibles`
- Obtiene todos los automóviles disponibles para alquiler

## punto numero 4

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/alquileresActivos`
- Lista todos los alquileres activos junto con los datos de los clientes relacionados.

## punto numero 5

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/reservasPendientes`
- Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.

## punto numero 6

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/alquiler/:id`
- Obtener los detalles del alquiler con el ID_Alquiler específico.

## punto numero 7

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/empleadosVendedor`
- Listar los empleados con el cargo de "Vendedor".

## punto numero 8

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/automovilSurcursal`
- Mostrar la cantidad total de automóviles disponibles en cada sucursal.

## punto numero 9

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/appAlquilerCosto/:id`
- Obtener el costo total de un alquiler específico.

## punto numero 10

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/clienteDNI/:id`
- Listar los clientes con el DNI específico.
- el id es el DNI del cliente

## punto numero 11

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/mostrarCapacidadMas5`
- Mostrar todos los automóviles con una capacidad mayor a 5 personas.

## punto numero 12

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/alquilerFecha`
- Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.

## punto numero 13

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/reservasPendientesCliente`
- Listar las reservas pendientes realizadas por un cliente específico.

## punto numero 14

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/empleadosRol?rol="rol"`
- Mostrar los empleados con cargo de "Gerente" o "Asistente".

## punto numero 15

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/alquilerUsuario`
- Obtener los datos de los clientes que realizaron al menos un alquiler.

## punto numero 16

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/automoviles`
- Listar todos los automóviles ordenados por marca y modelo.

## punto numero 17

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/sucursalCantidad`
- Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.

## punto numero 18

## Características del Endpoint

- Métodos: GET
- Ruta del Endpoint: `/totalAlquileres`
- Obtener la cantidad total de alquileres registrados en la base de datos.







