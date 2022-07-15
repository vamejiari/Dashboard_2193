import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Indicadores_Calidad_Hospitales/create" className="btn btn-primary mt-2 mb-2">Crear Indicador Calidad Hospital</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
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
                                        <Link to={`/Indicadores_Calidad_Hospitales/${indicadorCalidad.Id_Indicador_Calidad}/${indicadorCalidad.Codigo_Habilitacion}/${indicadorCalidad.Id_Area}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteIndicadorCalidadHospital(indicadorCalidad.Id_Indicador, indicadorCalidad.Codigo_Habilitacion, indicadorCalidad.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>

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

export default CompShowIndicadoresCalidadHospitales