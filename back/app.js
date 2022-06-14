import express from 'express';
import cors from 'cors'

//IMPORTAR CONEXION A BASE DE DATOS
import db from './database/db.js';

//IMPORTAR ENRUTADOR
import RoutesDepartamento from './routes/RoutesDepartamento.js'

const app=express()

//CONFIGURACION CORS
app.use(cors())
app.use(express.json())

//RUTA DEPARTAMENTO
app.use('/departamentos', RoutesDepartamento)

//RUTA MUNICIPIO


//DEFINIR CONEXION A LA BASE DE DATOS
try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

//SERVIDOR
app.listen(5500,()=>{
    console.log('Servidor levantado y funcionando en el puerto http://localhost:5500/')
})