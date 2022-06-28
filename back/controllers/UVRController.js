//IMPORTAR EL MODELO
import UVRModel from "../models/UVRModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODAS LAS UVR
export const getUVRS=async(req,res)=>{
    try {
        const uvrs=await UVRModel.findAll()
        res.json(uvrs)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UNA UVR
export const getUVR=async(req,res)=>{
    try {
        const uvr=await UVRModel.findAll({
            where:{
                Id_UVR:req.params.Id_UVR
            }
        })
        res.json(uvr[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA NUEVA UVR
export const createUVR=async(req, res)=>{
    try {
        await UVRModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UNA UVR
export const updateUVR=async(req,res)=>{
    try {
        await UVRModel.update(req.body,{
            where:{
                Id_UVR: req.params.Id_UVR
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA UVR
export const deleteUVR=async(req,res)=>{
    try{
        await UVRModel.destroy({
            where:{
                Id_UVR:req.params.Id_UVR
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch(error){
        res.json({message: `Existe un error ${error.message}`})
    }
}