import express, { Router }  from "express";
import { createMetaProduccion, deleteMetaProduccion, getMetaProduccion, getMetasProduccion, updateMetaProduccion } from "../controllers/MetaProduccionController.js"
const router=express.Router()

//MOSTRAR TODAS LAS METAS
router.get('/',getMetasProduccion)

//MOSTRAR LAS METAS DE UNA ENTIDAD
router.get('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Anio',getMetaProduccion)

//CREAR UNA META
router.post('/',createMetaProduccion)

//ACTUALIZAR UNA META DE UNA VARIABLE REGISTRADA A UNA ENTIDAD
router.put('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Anio', updateMetaProduccion)

//ELIMINAR UNA META DE UNA ENTIDAD
router.delete('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Anio', deleteMetaProduccion)

export default router