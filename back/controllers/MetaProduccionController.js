//IMPORTAR EL MODELO
import MetaProduccionModel from "../models/MetaProduccionModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODAS LAS METAS REGISTRADAS
export const getMetasProduccion=async(req,res)=>{
    try {
        const metasProduccion=await MetaProduccionModel.findAll()
        res.json(metasProduccion)
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//BUSCAR LAS METAS REGISTRADAS A UNA ENTIDAD
export const getMetaProduccion=async(req, res)=>{
    try {
        const metaProduccion=await MetaProduccionModel.findAll({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion
            }
        })
        res.json(metaProduccion)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA META
export const createMetaProduccion=async(req,res)=>{
    try {
        await MetaProduccionModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UNA META DE UNA VARIABLE DE UN HOSPITAL
export const updateMetaProduccion=async(req,res)=>{
    try {
        await MetaProduccionModel.update(req.body,{
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion
            }
        })
        res.json({
            "message":"Registro actualizado con exito"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA META DE UNA ENTIDAD
export const deleteMetaProduccion=async(req,res)=>{
    try {
        await MetaProduccionModel.destroy({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion, 
                Id_Variable_Produccion:req.params.Id_Variable_Produccion
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}
