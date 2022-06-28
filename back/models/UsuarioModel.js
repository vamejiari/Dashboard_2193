//IMPORTAR CONEXION DE LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const UsuarioModel=db.define('usuarios',{
    Cedula:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Nombre:{
        type:DataTypes.STRING
    }, Apellidos: {
        type: DataTypes.STRING
    }, Tipo_Usuario:{
        type:DataTypes.ENUM('Asesor','Gerente','Usuario')
    }, Usuario:{
        type:DataTypes.STRING,
    }, Contrasena:{
        type: DataTypes.BLOB
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }, Id_Area:{
        type:DataTypes.STRING
    }
})

export default UsuarioModel;
