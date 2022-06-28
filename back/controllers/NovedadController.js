//IMPORTAR EL MODELO
import NovedadModel from "../models/NovedadModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODAS LAS NOVEDADES
export const getNovedades=async(req,res)=>{
    try {
        const novedades=await NovedadModel.findAll()
        res.json(novedades)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LAS NOVEDADES DE UNA ENTIDAD EN UN PERIODO
export const getNovedad=async(req,res)=>{
    try {
        const novedad=await NovedadModel.findAll({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Periodo: req.params.Id_Periodo
            }
        })
        res.json(novedad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA NOVEDAD
export const createNovedad=async(req,res)=>{
    try {
        await NovedadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UNA NOVEDAD
export const updateNovedad=async(req,res)=>{
    try {
        await NovedadModel.update(req.body,{
            where:{
                Id_Novedad: req.params.Id_Novedad
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA NOVEDAD
export const deleteNovedad=async(req,res)=>{
    try {
        await NovedadModel.destroy({
            where:{
                Id_Novedad: req.params.Id_Novedad
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}