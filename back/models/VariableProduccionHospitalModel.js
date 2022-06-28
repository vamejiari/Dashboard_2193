//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const VariableProduccionHospitalModel=db.define('variable_produccion_hospitales',{
    Id_Variable_Produccion:{
        type: DataTypes.STRING,
        primaryKey:true
    }, Codigo_Habilitacion:{
        type: DataTypes.STRING,
        primaryKey: true
    }, Id_Area:{
        type: DataTypes.STRING,
        primaryKey: true
    }, Activa:{
        type: DataTypes.BOOLEAN
    }
})

export default VariableProduccionHospitalModel
