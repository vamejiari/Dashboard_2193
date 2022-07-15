import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Registros_Produccion/'

const CompShowRegistrosProduccion=()=>{
    //Hooks
    const [Registros_Produccion, setRegistros_Produccion]=useState([])

    useEffect(()=>{
        getRegistrosProduccion()
    },[])

    //Mostrar registros produccion
    const getRegistrosProduccion=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setRegistros_Produccion(res.data)
    }

    //Eliminar un registro produccion
    const deleteRegistroProduccion=async(Codigo_Habilitacion, Id_Variable_Produccion, Id_Periodo)=>{
        //Peticion axios
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Id_Periodo}`)
        getRegistrosProduccion()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Registros_Produccion/create" className="btn btn-primary mt-2 mb-2">Crear Registro Produccion</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Registro</th>
                                <th>Población Pobre</th>
                                <th>No Poss</th>
                                <th>Subsidiado</th>
                                <th>Contributivo</th>
                                <th>Otros</th>
                                <th>Total</th>
                                <th>Calculo UVR</th>
                                <th>Id Periodo</th>
                                <th>Codigo Habilitacion</th>
                                <th>Id Area</th>
                                <th>Id Variable</th>
                                <th>Id UVR</th>
                                <th>Id Consolidado</th>
                                <th>Acciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {Registros_Produccion.map((registro)=>(
                                <tr key={registro.Codigo_Habilitacion + registro.Id_Variable_Produccion + registro.Id_Periodo}>
                                    <td>{registro.Id_Registro}</td>
                                    <td>{registro.Poblacion_Pobre}</td>
                                    <td>{registro.No_Poss}</td>
                                    <td>{registro.Subsidiado}</td>
                                    <td>{registro.Contributivo}</td>
                                    <td>{registro.Otros}</td>
                                    <td>{registro.Total}</td>
                                    <td>{registro.Calculo_UVR}</td>
                                    <td>{registro.Id_Periodo}</td>
                                    <td>{registro.Codigo_Habilitacion}</td>
                                    <td>{registro.Id_Area}</td>
                                    <td>{registro.Id_Variable_Produccion}</td>
                                    <td>{registro.Id_UVR}</td>
                                    <td>{registro.Id_Consolidado}</td>
                                    <td>
                                        <Link to={`/Registros_Produccion/edit/${registro.Codigo_Habilitacion}/${registro.Id_Variable_Produccion}/${registro.Id_Periodo}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteRegistroProduccion(registro.Codigo_Habilitacion, registro.Id_Variable_Produccion, registro.Id_Periodo)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowRegistrosProduccion
