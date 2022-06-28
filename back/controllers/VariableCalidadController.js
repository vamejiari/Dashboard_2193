//IMPORTAR MODELO
import VariableCalidadModel from "../models/VariableCalidadModel.js";

//----------*METODOS CRUD*----------

//LISTAR LAS VARIABLES DE CALIDAD
export const getVariablesCalidad=async(req,res)=>{
    try{
        const variables=await VariableCalidadModel.findAll()
        res.json(variables)
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//BUSCAR UNA VARIABLE
export const getVariableCalidad=async(req,res)=>{
    try {
        const variable=await VariableCalidadModel.findAll({
            where:{
                Id_Variable_Calidad: req.params.Id_Variable_Calidad
            }
        })
        res.json(variable[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA VARIABLE
export const createVariableCalidad=async(req,res)=>{
    try{
        await VariableCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch(error){
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN VARIABLE
export const updateVariableCalidad=async(req,res)=>{
    try {
        await VariableCalidadModel.update(req.body,{
            where:{
                Id_Variable_Calidad: req.params.Id_Variable_Calidad
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA VARIABLE
export const deleteVariableCalidad=async(req,res)=>{
    try {
        await VariableCalidadModel.destroy({
            where:{
                Id_Variable_Calidad: req. params.Id_Variable_Calidad
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}
