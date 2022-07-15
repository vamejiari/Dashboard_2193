//IMPORTAR EL MODEL
import PeriodoModel from "../models/PeriodoModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS PERIODOS
export const getPeriodos=async(req,res)=>{
    try {
        const periodos=await PeriodoModel.findAll()
        res.json(periodos)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LOS PERIODOS DE UN AÑO
export const getPeriodo=async(req,res)=>{
    try {
        const periodo=await PeriodoModel.findAll({
            where:{
                Id_Periodo:req.params.Id_Periodo
            }
        })
        res.json(periodo)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN PERIODO
export const createPeriodo=async(req,res)=>{
    try {
        await PeriodoModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN PERIODO
export const updatePeriodo=async(req, res)=>{
    try {
        await PeriodoModel.update(req.body,{
            where:{
                Id_Periodo: req.params.Id_Periodo
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN PERIODO 
export const deletePeriodo=async(req,res)=>{
    try {
        await PeriodoModel.destroy({
            where:{
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