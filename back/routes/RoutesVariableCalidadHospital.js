import express from 'express'
import { createVariableCalidadHospital, deleteVariableCalidadHospital, getVariableCalidadHospital, getVariablesCalidadHospital, updateVariableCalidadHospital } from '../controllers/VariableCalidadHospitalController.js'
const router=express.Router()

//MOSTRAR TODAS LAS VARIABLES REGISTRADAS EN EL SISTEMA
router.get('/', getVariablesCalidadHospital)

//MOSTRAR LAS VARIABLES REGISTRADAS UNA ENTIDAD
router.get('/:Id_Variable_Calidad/:Codigo_Habilitacion/:Id_Area', getVariableCalidadHospital)

//CREAR UNA VARIABLE EN UNA ENTIDAD
router.post('', createVariableCalidadHospital)

//ACTUALIZAR UNA VARIABLE DE UNA ENTIDAD
router.put('/:Id_Variable_Calidad/:Codigo_Habilitacion/:Id_Area', updateVariableCalidadHospital)

//ELIMINAR UNA VARIABLE DE UNA ENTIDAD
router.delete('/:Id_Variable_Calidad/:Codigo_Habilitacion/:Id_Area', deleteVariableCalidadHospital)

export default router