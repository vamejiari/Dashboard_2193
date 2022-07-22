import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

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
                            <div>
                                <Link to="/Areas_Hospitales/create" className='btn' id="Crear">Asignar Área</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowAreaHospitales