import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Consolidados_Calidad/'

const CompShowConsolidadosCalidad=()=>{
    //Hooks
    const [Consolidados_Calidad, setConsolidados_Calidad]=useState([])

    useEffect(()=>{
        getConsolidadosCalidad()
    },[])

    //Mostrar consolidados calidad
    const getConsolidadosCalidad=async()=>{
        //Peticios axios
        const res=await axios.get(URI)
        setConsolidados_Calidad(res.data)
    }

    //Eliminar un consolidado calidad
    const deleteConsolidadoCalidad=async(Codigo_Habilitacion, Id_Variable_Calidad, Id_Vigencia)=>{
        //Peticion axios
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Vigencia}`)
        getConsolidadosCalidad()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Consolidados_Indicadores_Calidad/create" className="btn btn-primary mt-2 mb-2">Crear Consolidado Calidad</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Consolidado Calidad</th>
                                <th>Cantidad</th>
                                <th>Vigencia</th>
                                <th>Variable Calidad</th>
                                <th>Codigo Habilitacion</th>
                                <th>Area</th>
                                <th>Consolidado Indicador</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Consolidados_Calidad.map ((consolidado)=>(
                                <tr key={consolidado.Codigo_Habilitacion + consolidado.Id_Variable_Calidad + consolidado.Id_Vigencia}>
                                    <td>{consolidado.Id_Consolidado_Calidad}</td>
                                    <td>{consolidado.Cantidad}</td> 
                                    <td>{consolidado.Id_Vigencia}</td>
                                    <td>{consolidado.Id_Variable_Calidad}</td>
                                    <td>{consolidado.Codigo_Habilitacion}</td>
                                    <td>{consolidado.Id_Area}</td>
                                    <td>{consolidado.Id_Consolidado_Indicador}</td>
                                    <td>
                                        <Link to={`/Consolidados_Calidad/edit/${consolidado.Codigo_Habilitacion}/${consolidado.Id_Variable_Calidad}/${consolidado.Id_Vigencia}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteConsolidadoCalidad(consolidado.Codigo_Habilitacion, consolidado.Id_Variable_Calidad, consolidado.Id_Vigencia)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowConsolidadosCalidad