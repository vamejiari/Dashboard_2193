import express from 'express'
import { createIndicadorCalidad, deleteIndicadorCalidad, getIndicadorCalidad, getIndicadoresCalidad, updateIndicadorCalidad } from '../controllers/IndicadorCalidadController.js'
const router=express.Router()

//MOSTRAR TODOS LOS INDICADORES
router.get('/', getIndicadoresCalidad)

//MOSTRAR UN INDICADOR
router.get('/:Id_Indicador', getIndicadorCalidad)

//CREAR UN INDICADOR
router.post('/', createIndicadorCalidad)

//ACTUALIZAR UN INDICADOR
router.put('/:Id_Indicador', updateIndicadorCalidad)

//ELIMINAR UN INDICADOR
router.delete('/:Id_Indicador', deleteIndicadorCalidad)

export default router