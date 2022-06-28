import express from 'express'
import { createNovedad, deleteNovedad, getNovedad, getNovedades, updateNovedad } from '../controllers/NovedadController.js'
const router=express.Router()

//MOSTRAR TODAS LAS NOVEDADES
router.get('/', getNovedades)

//MOSTRAR LAS NOVEDADES DE UNA ENTIDAD DE UN PERIODO
router.get('/:Codigo_Habilitacion/Id_Periodo', getNovedad)

//CREAR UNA NOVEDAD
router.post('/', createNovedad)

//ACTUALIZAR UNA NOVEDAD
router.put('/:Id_Novedad', updateNovedad)

//ELIMINAR UNA NOVEDAD
router.delete('/:Id_Novedad', deleteNovedad)

export default router