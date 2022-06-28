//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

const RegistroCalidadModel=db.define('calidad_registros',{
    Id_Registro_Calidad:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Cantidad:{
        type:DataTypes.INTEGER
    }, Id_Variable_Calidad:{
        type:DataTypes.STRING
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }, Id_Area:{
        type:DataTypes.STRING
    }, Id_Periodo:{
        type: DataTypes.STRING
    }, Id_Registro_Indicador:{
        type:DataTypes.STRING
    }, Id_Consolidado_Calidad:{
        type:DataTypes.STRING
    }
})

export default RegistroCalidadModel