import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Variables_Calidad/'

const CompShowVariablesCalidad=()=>{
    //Hooks
    const [Variables_Calidad, setVariables_Calidad]=useState([])
    useEffect(()=>{
        getVariablesCalidad()
    },[])

    //Obtener todas las variables
    const getVariablesCalidad=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setVariables_Calidad(res.data)
    }

    //Eliminar una variables
    const deleteVariableCalidad=async(Id_Variable_Calidad)=>{
        //Peticion axios
        await axios.delete(`${URI}${Id_Variable_Calidad}`)
        getVariablesCalidad()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/Variables_Calidad/create' className="btn btn-primary mt-2 mb-2">Crear Variable Calidad</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Variable Calidad</th>
                                <th>Nombre Variable</th>
                                <th>Tipo Valor</th>
                                <th>Indicador</th>
                                <th>Activa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Variables_Calidad.map((variable_calidad)=>(
                                <tr key={variable_calidad.Id_Variable_Calidad}>
                                    <td>{variable_calidad.Id_Variable_Calidad}</td>
                                    <td>{variable_calidad.Nombre_Variable}</td>
                                    <td>{variable_calidad.Tipo_Valor}</td>
                                    <td>{variable_calidad.Id_Indicador}</td>
                                    <td>{variable_calidad.Activa}</td>
                                    <td>
                                        <Link to={`/Variables_Calidad/edit/${variable_calidad.Id_Variable_Calidad}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteVariableCalidad(variable_calidad.Id_Variable_Calidad)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowVariablesCalidad