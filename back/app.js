import express from 'express';
import cors from 'cors'

//IMPORTAR CONEXION A BASE DE DATOS
import db from './database/db.js';

//IMPORTAR ENRUTADORES DE LOS METODOS
import RoutesDepartamento from './routes/RoutesDepartamento.js'
import RoutesMunicipio from './routes/RoutesMunicipio.js'
import RoutesNivel from './routes/RoutesNivel.js'
import RoutesArea from './routes/RoutesArea.js'
import RoutesHospital from './routes/RoutesHospital.js'
import RoutesAreaHospital from './routes/RoutesAreaHospital.js'
import RoutesUsuario from './routes/RoutesUsuario.js'
import RoutesVariableProduccion from './routes/RoutesVariableProduccion.js'
import RoutesUVR from './routes/RoutesUVR.js'
import RoutesVariableProduccionHospital from './routes/RoutesVariableProduccionHospital.js'
import RoutesMetaProduccion from './routes/RoutesMetaProduccion.js'
import RoutesVigencia from './routes/RoutesVigencia.js'
import RoutesPeriodo from './routes/RoutesPeriodo.js'
import RoutesNovedad from './routes/RoutesNovedad.js'
import RoutesRegistroProduccion from './routes/RoutesRegistroProduccion.js'
import RoutesConsolidadoProduccion from './routes/RoutesConsolidadoProduccion.js'
import RoutesIndicadorCalidad from './routes/RoutesIndicadorCalidad.js'
import RoutesVariableCalidad from './routes/RoutesVariableCalidad.js'
import RoutesVariableCalidadHospital from './routes/RoutesVariableCalidadHospital.js'
import RoutesMetaIndicadorCalidad from './routes/RoutesMetaIndicadorCalidad.js'
import RoutesIndicadorCalidadHospital from './routes/RoutesIndicadorCalidadHospital.js'
import RoutesConsolidadoIndicadorCalidad from './routes/RoutesConsolidadoIndicadorCalidad.js'
import RoutesConsolidadoCalidad from './routes/RoutesConsolidadoCalidad.js'
import RoutesRegistroIndicadorCalidad from './routes/RoutesRegistroIndicadorCalidad.js'
import RoutesRegistroCalidad from './routes/RoutesRegistroCalidad.js'
import RouteLogin from './routes/RouteLogin.js'

const app=express()

//CONFIGURACION CORS
app.use(cors())
app.use(express.json())

app.use('/Departamentos', RoutesDepartamento)
app.use('/Municipios',RoutesMunicipio)
app.use('/Niveles', RoutesNivel)
app.use('/Areas',RoutesArea)
app.use('/Hospitales', RoutesHospital)
app.use('/Areas_Hospitales',RoutesAreaHospital)
app.use('/Usuarios', RoutesUsuario)
app.use('/Variables_Produccion', RoutesVariableProduccion)
app.use('/UVRS', RoutesUVR)
app.use('/Variables_Produccion_Hospitales', RoutesVariableProduccionHospital)
app.use('/Metas_Produccion', RoutesMetaProduccion)
app.use('/Vigencias', RoutesVigencia)
app.use('/Periodos', RoutesPeriodo)
app.use('/Novedades', RoutesNovedad)
app.use('/Registros_Produccion', RoutesRegistroProduccion)
app.use('/Consolidados_Produccion', RoutesConsolidadoProduccion)
app.use('/Indicadores_Calidad', RoutesIndicadorCalidad)
app.use('/Variables_Calidad', RoutesVariableCalidad)
app.use('/Variables_Calidad_Hospitales', RoutesVariableCalidadHospital)
app.use('/Metas_Indicadores_Calidad', RoutesMetaIndicadorCalidad)
app.use('/Indicadores_Calidad_Hospitales', RoutesIndicadorCalidadHospital)
app.use('/Consolidados_Indicadores_Calidad', RoutesConsolidadoIndicadorCalidad)
app.use('/Consolidados_Calidad', RoutesConsolidadoCalidad)
app.use('/Registros_Indicadores_Calidad', RoutesRegistroIndicadorCalidad)
app.use('/Registros_Calidad', RoutesRegistroCalidad)
app.use('/Login', RouteLogin)


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