import express from 'express'
import { createUVR, deleteUVR, getUVR, getUVRS, updateUVR } from '../controllers/UVRController.js'
const router=express.Router()

//MOSTRAR TODAS LAS UVR
router.get('/', getUVRS)

//MOSTRAR UNA UVR
router.get('/:Id_UVR', getUVR)

//CREAR UNA UVR
router.post('/',createUVR)

//ACTUALIZAR UNA UVR
router.put('/:Id_UVR',updateUVR)

//ELIMINAR UNA UVR
router.delete('/:Id_UVR', deleteUVR)

export default router