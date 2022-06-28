import express from "express"
import { createHospital, deleteHospital, getHospital, getHospitales, updateHospital } from '../controllers/HospitalController.js'

const router=express.Router()

//MOSTRAR TODOS LOS HOSPITALES
router.get('/', getHospitales)

//MOSTRAR UN HOSPITAL
router.get('/:Codigo_Habilitacion',getHospital)

//CREAR UN HOSPITAL
router.post('/',createHospital)

//ACTUALIZAR UN HOSPITAL
router.put('/:Codigo_Habilitacion',updateHospital)

//ELIMINAR UN HOSPITAL
router.delete('/:Codigo_Habilitacion', deleteHospital)

export default router