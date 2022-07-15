import VariableProduccionHospitalModel from "../models/VariableProduccionHospitalModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODAS LAS VARIABLES REGISTRADAS A HOSPITALES
export const getVariablesProduccionHospital=async(req,res)=>{
    try {
        const variableProduccionHospitales=await VariableProduccionHospitalModel.findAll()
        res.json(variableProduccionHospitales)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR VARIABLEs REGISTRADAS A UN HOSPITAL
export const getVariableProduccionHospital=async(req,res)=>{
    try {
        const variableProduccionHospital=await VariableProduccionHospitalModel.findAll({
            where:{
                Id_Variable_Produccion:req.params.Id_Variable_Produccion,
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Area:req.params.Id_Area
            }
        })
        res.json(variableProduccionHospital)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA RELACION ENTRE HOSPITAL Y VARIABLE
export const createVariableProduccionHospital=async(req,res)=>{
    try {
        await VariableProduccionHospitalModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ACTUALIZAR LAS VARIABLES DE UNA ENTIDAD
export const updateVariableProduccionHospital=async(req,res)=>{
    try {
        await VariableProduccionHospitalModel.update(req.body,{
            where:{
                Id_Variable_Produccion:req.params.Id_Variable_Produccion,
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Area:req.params.Id_Area
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR VARIABLES DE UNA ENTIDAD
export const deleteVariableProduccionHospital=async(req,res)=>{
    try {
        await VariableProduccionHospitalModel.destroy({
            where:{
                Id_Variable_Produccion:req.params.Id_Variable_Produccion,
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Area:req.params.Id_Area
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}