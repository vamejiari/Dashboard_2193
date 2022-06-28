import express from 'express'
import { createVariableCalidad, deleteVariableCalidad, getVariableCalidad, getVariablesCalidad, updateVariableCalidad } from '../controllers/VariableCalidadController.js'
const router=express.Router()

//MOSTRAR TODAS LAS VARIABLES DE CALIDAD
router.get('/', getVariablesCalidad)

//MOSTRAR UNA VARIABLE DE CALIDAD
router.get('/:Id_Variable_Calidad', getVariableCalidad)

//CREAR UNA VARIABLE DE CALIDAD
router.post('/', createVariableCalidad)

//ACTUALIZAR UNA VARIABLE DE CALIDAD
router.put('/:Id_Variable_Calidad', updateVariableCalidad)

//ELIMINAR UNA VARIABLE DE CALIDAD
router.delete('/:Id_Variable_Calidad', deleteVariableCalidad)

export default router