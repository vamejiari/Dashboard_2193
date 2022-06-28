//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const PeriodoModel=db.define('periodos',{
    Id_Periodo:{
        type: DataTypes.STRING,
        primaryKey: true
    }, Mes:{
        type: DataTypes.INTEGER
    }, Anio:{
        type: DataTypes.INTEGER
    }, Id_Vigencia:{
        type:DataTypes.STRING
    }
})

export default PeriodoModel