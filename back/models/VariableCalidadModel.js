//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

const VariableCalidadModel=db.define('calidad_variables',{
    Id_Variable_Calidad:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Nombre_Variable:{
        type:DataTypes.STRING
    }, Tipo_Valor:{
        type: DataTypes.ENUM('Numerador','Denominador')
    }, Id_Indicador:{
        type: DataTypes.STRING
    }, Activa:{
        type:DataTypes.BOOLEAN
    }
})

export default VariableCalidadModel