//IMPORTAR EL MODEL
import UsuarioModel from "../models/UsuarioModel.js";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
//---------*METODOS CRUD*---------

//LISTAR TODOS LOS USUARIOS
export const getUsuarios=async(req,res)=>{
    try {
        const usuarios=await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UN USUARIO
export const getUsuario=async(req,res)=>{
    try {
        const usuario=await UsuarioModel.findAll({
            where:{
                Cedula:req.params.Cedula
            }
        })
        res.json(usuario[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN USUARIO
export const createUsuario=async(req, res)=>{
    try{
        const Contrasena=bcrypt.hashSync(req.body.Contrasena, 10)
        await UsuarioModel.create({
            Cedula:req.body.Cedula,
            Nombre:req.body.Nombre,
            Apellidos:req.body.Apellidos,
            Tipo_Usuario:req.body.Tipo_Usuario,
            Usuario:req.body.Usuario,
            Contrasena:Contrasena,
            Codigo_Habilitacion:req.body.Codigo_Habilitacion,
            Id_Area:req.body.Id_Area
        }).then(usuario=>{
            const token=jwt.sign({usuario:usuario},'secret',{
                expiresIn:"10h"
            })
            res.json({
                usuario:usuario,
                token:token
            })
        })
    }catch (error){
        res.status(500).json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN USUARIO
export const updateUsuario=async(req, res)=>{
    try {
        await UsuarioModel.update(req.body,{
            where:{
                Cedula:req.params.Cedula
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN NIVEL
export const deleteUsuario=async(req,res)=>{
    try{
        await UsuarioModel.destroy({
            where:{
                Cedula:req.params.Cedula
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch(error){
        res.json({message:`Existe un error ${error.message}`})
    }
}