//IMPORTAR CONEXION DE LA BASE DE DATOS
import db from "../database/db.js";

//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//DEFINIR CONEXION A LA BASE DE DATOS
const DepartamentoModel=db.define('departamentos',{
    Id_Departamento: {
        type: DataTypes.STRING, 
        primaryKey: true},
    Nombre_Departamento: {type: DataTypes.STRING}
});

export default DepartamentoModel;

