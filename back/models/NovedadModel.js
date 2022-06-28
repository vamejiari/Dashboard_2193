//IMPORTAR LA CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const NovedadModel=db.define('novedades',{
    Id_Novedad:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Novedad:{
        type:DataTypes.STRING
    }, Id_Periodo:{
        type:DataTypes.STRING
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }
})

export default NovedadModel
