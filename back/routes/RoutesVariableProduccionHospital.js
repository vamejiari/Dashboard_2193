import express, { Router } from 'express'
import { createVariableProduccionHospital, deleteVariableProduccionHospital, getVariableProduccionHospital, getVariablesProduccionHospital, updateVariableProduccionHospital } from '../controllers/VariableProduccionHospitalController.js'

const router=express.Router()

//MOSTRAR TODOS LOS USUARIOS
router.get('/', getVariablesProduccionHospital)

//MOSTRAR VARIABLES DE UN HOSPITAL
router.get('/:Id_Variable_Produccion/:Codigo_Habilitacion/:Id_Area', getVariableProduccionHospital)

//CREAR UNA VARIABLE EN UN HOSPITAL
router.post('/', createVariableProduccionHospital)

//ACTUALIZAR LAS VARIABLES DE UN HOSPITAL
router.put('/:Id_Variable_Produccion/:Codigo_Habilitacion/:Id_Area', updateVariableProduccionHospital)

//ELIMINAR UNA VARIABLE DE UN HOSPITAL
router.delete('/:Id_Variable_Produccion/:Codigo_Habilitacion/:Id_Area', deleteVariableProduccionHospital)

export default router