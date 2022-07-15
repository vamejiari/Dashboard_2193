import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Variables_Produccion_Hospitales/'

const CompShowVariablesProduccionHospitales=()=>{
    //CONFIGURAR HOOKS
    const [Variables_Produccion_Hospitales, setVariables_Produccion_Hospitales]=useState([])
    useEffect(()=>{
        getVariablesProduccionHospitales()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS VARIABLES DE HOSPITALES
    const getVariablesProduccionHospitales=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setVariables_Produccion_Hospitales(res.data)
    }

    const deleteVariableProduccionHospital=async(Id_Variable_Produccion, Codigo_Habilitacion, Id_Area)=>{
        await axios.delete(`${URI}${Id_Variable_Produccion}/${Codigo_Habilitacion}/${Id_Area}`)
        getVariablesProduccionHospitales()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Variables_Produccion_Hospitales/create" className="btn btn-primary mt-2 mb-2">Crear Variable Produccion Hospital</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Variable Producción Hospital</th>
                                <th>Código Habilitación</th>
                                <th>Área</th>
                                <th>Activa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Variables_Produccion_Hospitales.map((variableProduccion)=>(
                                <tr key={variableProduccion.Id_Variable_Produccion + variableProduccion.Codigo_Habilitacion + variableProduccion.Id_Area}>
                                    <td>{variableProduccion.Id_Variable_Produccion}</td>
                                    <td>{variableProduccion.Codigo_Habilitacion}</td>
                                    <td>{variableProduccion.Id_Area}</td>
                                    <td>{variableProduccion.Activa}</td>
                                    <td>
                                        <Link to={`/Variables_Produccion_Hospitales/${variableProduccion.Id_Variable_Produccion}/${variableProduccion.Codigo_Habilitacion}/${variableProduccion.Id_Area}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteVariableProduccionHospital(variableProduccion.Id_Variable_Produccion, variableProduccion.Codigo_Habilitacion, variableProduccion.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowVariablesProduccionHospitales