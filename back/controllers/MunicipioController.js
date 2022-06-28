//IMPORTAR EL MODELO
import MunicipioModel from "../models/MunicipioModel.js";

//---------*METODOS CRUD*---------

//LISTAR TODOS LOS DEPARTAMENTOS
export const getMunicipios=async(req, res)=>{
    try {
        const municipios=await MunicipioModel.findAll()
        res.json(municipios)
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//BUSCAR UN MUNICIPIO
export const getMunicipio=async(req,res)=>{
    try {
        const municipio=await MunicipioModel.findAll({
            where:{
                Id_Municipio: req.params.Id_Municipio
            }
        })
        res.json(municipio[0])
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//CREAR UN MUNICIPIO
export const createMunicipio=async(req,res)=>{
    try {
        await MunicipioModel.create(req.body)
        res.json({
            "message":"registro creado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN MUNICIPIO
export const updateMunicipio=async(req,res)=>{
    try {
        await MunicipioModel.update(req.body,{
            where:{Id_Municipio:req.params.Id_Municipio}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN MUNICIPIO
export const deleteMunicipio=async(req,res)=>{
    try{
        await MunicipioModel.destroy({
            where:{Id_Municipio:req.params.Id_Municipio}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch(error){
        res.json({message: `Existe un error ${error.message}`})
    }
}

//---------*FIN METODOS CRUD*---------

//---------*OTROS METODOS*---------

//LISTAR LOS MUNICIPIOS DE UN DEPARTAMENTO
export const getMunicipiosDepartamento=async(req,res)=>{
    try {
        const municipios=await MunicipioModel.findAll({
            where:{
                Id_Departamento:req.params.Id_Departamento
            }
        })
        res.json(municipios)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}