import express from 'express'
import { createVariableCalidadHospital, deleteVariableCalidadHospital, getVariableCalidadHospital, getVariablesCalidadHospital, updateVariableCalidadHospital } from '../controllers/VariableCalidadHospitalController.js'
const router=express.Router()

//MOSTRAR TODAS LAS VARIABLES REGISTRADAS EN EL SISTEMA
router.get('/', getVariablesCalidadHospital)

//MOSTRAR LAS VARIABLES REGISTRADAS UNA ENTIDAD
router.get('/:Codigo_Habilitacion', getVariableCalidadHospital)

//CREAR UNA VARIABLE EN UNA ENTIDAD
router.post('', createVariableCalidadHospital)

//ACTUALIZAR UNA VARIABLE DE UNA ENTIDAD
router.put('/:Codigo_Habilitacion/:Id_Variable_Calidad', updateVariableCalidadHospital)

//ELIMINAR UNA VARIABLE DE UNA ENTIDAD
router.delete('/:Codigo_Habilitacion/:Id_Variable_Calidad', deleteVariableCalidadHospital)

export default router