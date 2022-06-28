import express from 'express'
import { createIndicadorCalidadHospital, deleteIndicadorCalidadHospital, getIndicadoresCalidadHospital, getIndicadoresCalidadHospitales, updateIndicadorCalidadHospital } from '../controllers/IndicadorCalidadHospitalController.js'
const router=express.Router()

//MOSTRAR TODOS LOS INDICADORES Y ENTIDADES
router.get('/', getIndicadoresCalidadHospitales)

//MOSTRAR LOS INDICADORES REGISTRADOS A UNA ENTIDAD
router.get('/:Codigo_Habilitacion/:Id_Indicador', getIndicadoresCalidadHospital)

//CREAR UN INDICADOR EN UNA ENTIDAD
router.post('/', createIndicadorCalidadHospital)

//ACTUALIZAN UN INDICADOR DE UNA ENTIDAD
router.put('/:Codigo_Habilitacion/:Id_Indicador', updateIndicadorCalidadHospital)

//ELIMINAR UN INDICADOR DE UNA ENTIDAD
router.delete('/:Codigo_Habilitacion/:Id_Indicador', deleteIndicadorCalidadHospital)

export default router
