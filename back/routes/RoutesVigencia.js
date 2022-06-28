import express from "express";
import { createVigencia, deleteVigencia, getVigencia, getVigencias, updateVigencia } from '../controllers/VigenciaController.js'

const router=express.Router()

//MOSTRAR TODAS LAS VIGENCIAS
router.get('/', getVigencias)

//MOSTRAR TODAS LAS VIGENCIAS DE ACTUUN AÑO
router.get('/:Anio', getVigencia)

//CREAR UNA VIGENCIA
router.post('/', createVigencia)

//ACTUALIZAR UNA VIGENCIA
router.put('/:Id_Vigencia', updateVigencia)

//ELIMINAR UNA VIGENCIA
router.delete('/:Id_Vigencia', deleteVigencia)

export default router
