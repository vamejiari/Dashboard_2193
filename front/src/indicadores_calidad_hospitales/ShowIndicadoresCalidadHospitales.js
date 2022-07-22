import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Indicadores_Calidad_Hospitales/'

const CompShowIndicadoresCalidadHospitales=()=>{
    ////Hooks
    const [Indicadores_Calidad_Hospitales, setIndicadores_Calidad_Hospitales]=useState([])
    useEffect(()=>{
        getIndicadoresCalidadHospitales()
    },[])

    //Mostrar todas las Indicadores de calidad de hospitales
    const getIndicadoresCalidadHospitales=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setIndicadores_Calidad_Hospitales(res.data)
    }

    const deleteIndicadorCalidadHospital=async(Id_Indicador, Codigo_Habilitacion, Id_Area)=>{
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Indicador}`)
        getIndicadoresCalidadHospitales()
    }

    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-4 abs-center">
                    <img src={Hospital} className="btn" alt="Hospital" width={350}/>
                </div>
                <div className="col-md-8">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Indicador Calidad Hospital</th>
                                            <th>Código Habilitación</th>
                                            <th>Área</th>
                                            <th>Activa</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Indicadores_Calidad_Hospitales.map((indicadorCalidad)=>(
                                            <tr key={indicadorCalidad.Id_Indicador + indicadorCalidad.Codigo_Habilitacion + indicadorCalidad.Id_Area}>
                                                <td>{indicadorCalidad.Id_Indicador}</td>
                                                <td>{indicadorCalidad.Codigo_Habilitacion}</td>
                                                <td>{indicadorCalidad.Id_Area}</td>
                                                <td>{indicadorCalidad.Activa}</td>
                                                <td>
                                                    <Link to={`/Indicadores_Calidad_Hospitales/${indicadorCalidad.Id_Indicador_Calidad}/${indicadorCalidad.Codigo_Habilitacion}/${indicadorCalidad.Id_Area}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteIndicadorCalidadHospital(indicadorCalidad.Id_Indicador, indicadorCalidad.Codigo_Habilitacion, indicadorCalidad.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Indicadores_Calidad_Hospitales/create" className='btn' id="Crear">Asignar Indicador</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowIndicadoresCalidadHospitales