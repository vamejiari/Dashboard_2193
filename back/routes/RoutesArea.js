import express from 'express'
import { createArea, deleteArea, getArea, getAreas, updateArea } from '../controllers/AreaController.js'
const router=express.Router()

//MOSTRAR TODAS LAS AREAS
router.get('/',getAreas)

//MOSTRAR UN AREA
router.get('/:Id_Area',getArea)

//CREAR UN AREA
router.post('/',createArea)

//ACTUALIZAR UN AREA
router.put('/:Id_Area', updateArea)

//ELIMINAR AREA
router.delete('/:Id_Area',deleteArea)

export default router