import express from 'express'
import { createMetaIndicadorCalidad, deleteMetaIndicadorCalidad, getMetaIndicadorCalidad, getMetasIndicadoresCalidad, updateMetaIndicadorCalidad } from '../controllers/MetaIndicadorCalidadController.js'
const router=express.Router()

//MOSTRAR TODAS LAS METAS DE LOS INDICADORES REGISTRADOS
router.get('/', getMetasIndicadoresCalidad)

//MOSTRAR LA META DE UN INDICADOR
router.get('/:Id_Meta_Indicador', getMetaIndicadorCalidad)

//CREAR LA META DE UN INDICADOR
router.post('/', createMetaIndicadorCalidad)

//ACTUALIZAR LA META DE UN INDICADOR
router.put('/:Id_Meta_Indicador', updateMetaIndicadorCalidad)

//ELIMINAR LA META DE UN INDICADOR
router.delete('/:Id_Meta_Indicador', deleteMetaIndicadorCalidad)

export default router