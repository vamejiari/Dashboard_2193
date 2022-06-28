import express from 'express'
import { createAreaHospital, deleteAreaHospital, getAreaHospital, getAreasHospital, updateAreaHospital } from "../controllers/AreaHospitalController.js"
const router=express.Router()

//MOSTRAR TODAS LAS AREAS DEL HOSPITAL
router.get('/', getAreasHospital)

//MOSTRAR UN AREA DEL HOSPITAL
router.get('/:Codigo_Habilitacion/:Id_Area',getAreaHospital)

//CREAR UN AREA DEL HOSPITAL
router.post('/',createAreaHospital)

//ACTUALIZAR UN AREA DEL HOSPITAL
router.put('/:Codigo_Habilitacion/:Id_Area',updateAreaHospital)

//ELIMINAR UN AREA DEL HOSPITAL
router.delete('/:Codigo_Habilitacion/:Id_Area',deleteAreaHospital)

export default router