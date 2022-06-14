//IMPORTAR EL MODELO 
import DepartamentoModel from "../models/DepartamentoModel.js";

//---------*METODOS CRUD*---------

//LISTAR TODOS LOS DEPARTAMENTOS
export const getDepartamentos=async(req, res)=>{
    try {
        const departamentos=await DepartamentoModel.findAll()
        res.json(departamentos);
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//BUSCAR UN DEPARTAMENTO
export const getDepartamento=async(req, res)=>{
    try {
        const departamento=await DepartamentoModel.findAll({
            where:{
                Id_Departamento: req.params.Id_Departamento
            }
        })
        res.json(departamento[0])
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//CREAR UN DEPARTAMENTO
export const createDepartamento=async(req,res)=>{
    try {
        await DepartamentoModel.create(req.body)
        res.json({
            "message":"registro creado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN DEPARTAMENTO
export const updateDepartamento=async(req,res)=>{
    try {
        await DepartamentoModel.update(req.body,{
            where:{Id_Departamento: req.params.Id_Departamento}
        })
        res.json({
            "message":"registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN DEPARTAMENTO
export const deleteDepartamento=async(req,res)=>{
    try {
        await DepartamentoModel.destroy({
            where:{Id_Departamento:req.params.Id_Departamento}
        })
        res.json({
            "message":"registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}