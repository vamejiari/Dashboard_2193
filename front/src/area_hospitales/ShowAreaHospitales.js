import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Areas_Hospitales/'

const CompShowAreaHospitales=()=>{
    //CONFIGURAR HOOKS
    const [Area_Hospitales, setAreas_Hospital]=useState([])
    useEffect(()=>{
        getAreasHospital()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS AREAS DEL HOSPITAL
    const getAreasHospital=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setAreas_Hospital(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN AREA
    const deleteAreaHospital=async(Codigo_Habilitacion, Id_Area)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Area}`)
        getAreasHospital()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/Areas_Hospitales/create' className="btn btn-primary">Crear Área Hospital</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Codigo Habilitacion</th>
                                <th>Id Área</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Area_Hospitales.map((area_hospital)=>(
                                <tr key={(area_hospital.Id_Area + area_hospital.Codigo_Habilitacion) }>
                                        <td>{area_hospital.Codigo_Habilitacion}</td>
                                        <td>{area_hospital.Id_Area}</td>
                                        <td>
                                            <button onClick={()=>deleteAreaHospital(area_hospital.Codigo_Habilitacion, area_hospital.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowAreaHospitales