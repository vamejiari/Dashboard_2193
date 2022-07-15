import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Variables_Produccion/'

const CompShowVariablesProduccion=()=>{
    //CONFIGURAR HOOKS
    const [Variables_Produccion, setVariables_Hospital]=useState([])
    useEffect(()=>{
        getVariablesProduccion()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS VARIABLES DE PRODUCCION
    const getVariablesProduccion=async()=>{
        //CREAR PETICIÓN CON AXIOS
        const res=await axios.get(URI)
        setVariables_Hospital(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UNA VARIABLE PRODUCCION
    const deleteVariableProduccion=async(Id_Variable_Produccion)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Variable_Produccion}`)
        getVariablesProduccion()
    }

    //DEVOLVER VISTA
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/Variables_Produccion/create' className="btn btn-primary mt-2 mb-2">Crear Variable Producción</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Variable Producción</th>
                                <th>Nombre Variable</th>
                                <th>Tipo Variable</th>
                                <th>Activa</th>
                                <th>Variable Suma</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Variables_Produccion.map((variableProduccion)=>(
                                <tr key={variableProduccion.Id_Variable_Produccion}>
                                    <td>{variableProduccion.Id_Variable_Produccion}</td>
                                    <td>{variableProduccion.Nombre_Variable}</td>
                                    <td>{variableProduccion.Tipo_Variable}</td>
                                    <td>{variableProduccion.Activa}</td>
                                    <td>{variableProduccion.Variable_Suma}</td>
                                    <td>
                                        <Link to={`/Variables_Produccion/edit/${variableProduccion.Id_Variable_Produccion}`} className='btn btn-primary'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteVariableProduccion(variableProduccion.Id_Variable_Produccion)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowVariablesProduccion