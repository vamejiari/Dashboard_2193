//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCIÓN DEL MODELO Y CONEXION A LA TABLA
const ConsolidadoProduccionModel=db.define('produccion_consolidados',{
    Id_Consolidado:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Poblacion_Pobre:{
        type:DataTypes.STRING
    }, No_Poss:{
        type:DataTypes.STRING
    }, Subsidiado:{
        type:DataTypes.INTEGER
    }, Contributivo:{
        type:DataTypes.INTEGER
    }, Otros:{
        type:DataTypes.INTEGER
    }, Total:{
        type: DataTypes.INTEGER
    }, Total_UVR:{
        type:DataTypes.FLOAT
    }, Id_Vigencia:{
        type: DataTypes.STRING
    }, Codigo_Habilitacion:{
        type: DataTypes.STRING
    }, Id_Area:{
        type:DataTypes.STRING
    }, Id_Variable_Produccion:{
        type:DataTypes.STRING
    }, Id_UVR:{
        type:DataTypes.STRING
    }
})

export default ConsolidadoProduccionModel