import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Indica from '../resources/KPI.png'
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
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-4 abs-center">
                    <img src={Indica} className="btn" alt="Hospital" width={320}/>
                </div>
                <div className="col-md-8">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
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
                                                    <Link to={`/Indicadores_Calidad/edit/${indicador.Id_Indicador}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteIndicador(indicador.Id_Indicador)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Indicadores_Calidad/create" className='btn' id="Crear">Crear Indicador Calidad</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowIndicadores
