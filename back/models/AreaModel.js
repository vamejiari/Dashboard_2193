//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const AreaModel=db.define('areas',{
    Id_Area:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Nombre_Area:{
        type:DataTypes.STRING
    }
})

export default AreaModel