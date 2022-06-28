//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR LA CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const RegistroProduccionModel=db.define('produccion_registros',{
    Id_Registro:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Poblacion_Pobre:{
        type:DataTypes.INTEGER
    }, No_Poss:{
        type: DataTypes.INTEGER
    }, Subsidiado:{
        type:DataTypes.INTEGER
    }, Contributivo:{
        type:DataTypes.INTEGER
    }, Otros:{
        type:DataTypes.INTEGER
    }, Total:{
        type: DataTypes.INTEGER
    }, Calculo_UVR:{
        type:DataTypes.FLOAT
    }, Id_Periodo:{
        type:DataTypes.STRING
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }, Id_Area:{
        type:DataTypes.STRING
    }, Id_Variable_Produccion:{
        type:DataTypes.STRING
    }, Id_UVR:{
        type:DataTypes.STRING
    }, Id_Consolidado:{
        type:DataTypes.STRING
    }
})

export default RegistroProduccionModel