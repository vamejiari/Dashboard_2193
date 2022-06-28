import express, { Router } from 'express'
import { createVariableProduccionHospital, deleteVariableProduccionHospital, getVariableProduccionHospital, getVariablesProduccionHospital, updateVariableProduccionHospital } from '../controllers/VariableProduccionHospitalController.js'

const router=express.Router()

//MOSTRAR TODOS LOS USUARIOS
router.get('/', getVariablesProduccionHospital)

//MOSTRAR VARIABLES DE UN HOSPITAL
router.get('/:Codigo_Habilitacion', getVariableProduccionHospital)

//CREAR UNA VARIABLE EN UN HOSPITAL
router.post('/', createVariableProduccionHospital)

//ACTUALIZAR LAS VARIABLES DE UN HOSPITAL
router.put('/:Codigo_Habilitacion', updateVariableProduccionHospital)

//ELIMINAR UNA VARIABLE DE UN HOSPITAL
router.delete('/:Codigo_Habilitacion/:Id_Variable_Produccion', deleteVariableProduccionHospital)

export default router