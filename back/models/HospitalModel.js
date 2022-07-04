//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const HospitalModel=db.define('hospitales',{
    Codigo_Habilitacion:{
        type:DataTypes.STRING,
        primaryKey: true
    }, NIT:{
        type:DataTypes.STRING
    }, Nombre:{
        type: DataTypes.STRING
    }, Id_Nivel:{
        type: DataTypes.STRING
    }, Id_Departamento:{
        type:DataTypes.STRING
    }, Id_Municipio:{
        type:DataTypes.STRING   
    }
})

export default HospitalModel


