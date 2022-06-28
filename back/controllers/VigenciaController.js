//IMPORTAR EL MODELO
import VigenciaModel from "../models/VigenciaModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODAS LAS VIGENCIAS
export const getVigencias=async(req,res)=>{
    try {
        const vigencias=await VigenciaModel.findAll()
        res.json(vigencias)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LAS VIGENCIAS DE UN AÑO
export const getVigencia=async(req,res)=>{
    try {
        const vigencia=await VigenciaModel.findAll({
            where:{
                Anio: req.params.Anio
            }
        })
        res.json(vigencia)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA VIGENCIA
export const createVigencia=async(req,res)=>{
    try {
        await VigenciaModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UNA VIGENCIA DE UN AÑO
export const updateVigencia=async(req,res)=>{
    try {
        await VigenciaModel.update(req.body,{
            where:{
                Id_Vigencia: req.params.Id_Vigencia
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA VIGENCIA
export const deleteVigencia=async(req,res)=>{
    try {
        await VigenciaModel.destroy({
            where:{
                Id_Vigencia:req.params.Id_Vigencia
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}