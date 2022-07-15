//IMPORTAR EL MODELO
import ConsolidadoProduccionModel from "../models/ConsolidadoProduccionModel.js";

//----------*METODOS CRUD*----------
//LISTAR TODOS LOS CONSOLIDADOS
export const getConsolidadosProduccion=async(req,res)=>{
    try {
        const consolidados=await ConsolidadoProduccionModel.findAll()
        res.json(consolidados)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LOS CONSOLIDADOS DE UNA VARIABLE REGISTRADA A UNA ENTIDAD
export const getConsolidadoProduccion=async(req,res)=>{
    try {
        const consolidado=await ConsolidadoProduccionModel.findAll({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion,
                Id_Vigencia:req.params.Id_Vigencia
            }
        })
        res.json(consolidado)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREA UN CONSOLIDADO DE PRODUCCION
export const createConsolidadoProduccion=async(req,res)=>{
    try {
        await ConsolidadoProduccionModel.create(req.body)
        res.json({
            "message":"Regisro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN CONSOLIDADO
export const updateConsolidadoProduccion=async(req,res)=>{
    try {
        await ConsolidadoProduccionModel.update(req.body,{
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion,
                Id_Vigencia:req.params.Id_Vigencia
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN CONSOLIDADO
export const deleteConsolidadoProduccion=async(req,res)=>{
    try {
        await ConsolidadoProduccionModel.destroy({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion,
                Id_Vigencia:req.params.Id_Vigencia
            }
        })
    } catch (error) {
        res.json({message: `Existe un error`})
    }
}