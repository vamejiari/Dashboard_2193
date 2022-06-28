//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const VariableProduccionModel=db.define('variable_producciones',{
    Id_Variable_Produccion:{
        type: DataTypes.STRING,
        primaryKey: true
    }, Nombre_Variable:{
        type: DataTypes.STRING
    }, Tipo_Variable:{
        type: DataTypes.ENUM('Sumatoria','No Sumatoria')
    }, Activa:{
        type:DataTypes.BOOLEAN
    }, Variable_Suma:{
        type: DataTypes.STRING
    }
})

export default VariableProduccionModel