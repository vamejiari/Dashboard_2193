//IMPORTAR CONEXION DE LA BASE DE DATOS
import db from "../database/db.js";

//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const DepartamentoModel=db.define('departamentos',{
    Id_Departamento: {
        type: DataTypes.STRING, 
        primaryKey: true},
    Nombre_Departamento: {type: DataTypes.STRING}
});

export default DepartamentoModel;

