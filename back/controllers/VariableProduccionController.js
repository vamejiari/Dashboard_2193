//IMPORTAR MODELO
import VariableProduccionModel from "../models/VariableProduccionModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LAS VARIABLES
export const getVariablesProduccion=async (req,res)=>{
    try {
        const variablesProduccion=await VariableProduccionModel.findAll()
        res.json(variablesProduccion)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UNA VARIABLE
export const getVariableProduccion=async(req,res)=>{
    try {
        const variableProduccion=await VariableProduccionModel.findAll({
            where:{
                Id_Variable_Produccion:req.params.Id_Variable_Produccion
            }
        })
        res.json(variableProduccion[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA VARIABLE
export const createVariableProduccion=async(req,res)=>{
    try {
        await VariableProduccionModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UNA VARIABLE
export const updateVariableProduccion=async(req,res)=>{
    try {
        await VariableProduccionModel.update(req.body,{
            where:{
                Id_Variable_Produccion:req.params.Id_Variable_Produccion
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA VARIABLE
export const deleteVariableProduccion=async(req,res)=>{
    try {
        await VariableProduccionModel.destroy({
            where:{
                Id_Variable_Produccion: req.params.Id_Variable_Produccion
            }
        })
        res.json({
            "message":"Registro eliminado con exito"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}