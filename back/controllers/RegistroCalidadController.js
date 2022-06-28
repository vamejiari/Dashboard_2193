//IMPORTAR EL MODELO
import RegistroCalidadModel from "../models/RegistroCalidadModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS REGISTROS DE CALIDAD
export const getRegistrosCalidad=async(req,res)=>{
    try {
        const registros=await RegistroCalidadModel.findAll()
        res.json(registros)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LOS REGISTROS DE CALIDAD DE UNA ENTIDAD
export const getRegistroCalidad=async(req,res)=>{
    try {
        const registro=await RegistroCalidadModel.findAll({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion
            }
        })
        res.json(registro)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN REGISTRO DE CALIDAD
export const createRegistroCalidad=async(req,res)=>{
    try {
        await RegistroCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN REGISTRO DE UNA VARIABLE EN UN PERIODO DE UNA ENTIDAD
export const updateRegistroCalidad=async(req,res)=>{
    try {
        await RegistroCalidadModel.update(req.body,{
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Variable_Calidad:req.params.Id_Variable_Calidad,
                Id_Periodo: req.params.Id_Periodo
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN REGISTRO DE UNA VARIABLE EN UN PERIODO DE UNA ENTIDAD
export const deleteRegistroCalidad=async(req,res)=>{
    try {
        await RegistroCalidadModel.destroy({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Variable_Calidad:req.params.Id_Variable_Calidad,
                Id_Periodo:req.params.Id_Periodo
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}