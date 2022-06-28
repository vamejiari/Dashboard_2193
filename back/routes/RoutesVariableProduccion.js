import express, { Router } from "express";
import { createVariableProduccion, deleteVariableProduccion, getVariableProduccion, getVariablesProduccion, updateVariableProduccion } from "../controllers/VariableProduccionController.js"

const router=express.Router()

//MOSTRAR TODAS LAS VARIABLES
router.get('/', getVariablesProduccion)

//MOSTRAR UNA VARIABLE
router.get('/:Id_Variable_Produccion', getVariableProduccion)

//CREAR UNA VARIABLE
router.post('/', createVariableProduccion)

//ACTUALIZAR UNA VARIABLE
router.put('/:Id_Variable_Produccion', updateVariableProduccion)

//ELIMINAR UNA VARIABLE
router.delete('/:Id_Variable_Produccion', deleteVariableProduccion)

export default router;