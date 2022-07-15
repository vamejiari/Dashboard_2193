import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Indicadores_Calidad/'

const CompShowIndicadores=()=>{
    //Hooks
    const [Indicadores, setIndicadores]=useState([])
    useEffect(()=>{
        getIndicadores()
    },[])

    //Obtener todos los indicadores
    const getIndicadores=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setIndicadores(res.data)
    }

    //Eliminar un indicador
    const deleteIndicador=async(Id_Indicador)=>{
        //Peticion axios
        await axios.delete(`${URI}${Id_Indicador}`)
        getIndicadores()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col"> 
                    <Link to='/Indicadores_Calidad/create' className="btn btn-primary mt-2 mb-2">Crear Indicador Calidad</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Indicador</th>
                                <th>Nombre Indicador</th>
                                <th>Activa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Indicadores.map((indicador)=>(
                                <tr key={indicador.Id_Indicador}>
                                    <td>{indicador.Id_Indicador}</td>
                                    <td>{indicador.Nombre_Indicador}</td>
                                    <td>{indicador.Activa}</td>
                                    <td>
                                        <Link to={`/Indicadores_Calidad/edit/${indicador.Id_Indicador}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteIndicador(indicador.Id_Indicador)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowIndicadores
