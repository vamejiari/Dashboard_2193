import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Hospitales/'

const CompShowHospitales=()=>{
    //CONFIGURAR HOOKS
    const [Hospitales, setHospitales]=useState([])
    useEffect(()=>{
        getHospitales()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODOS LOS HOSPITALES
    const getHospitales=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setHospitales(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN HOSPITAL
    const deleteHospital=async(Codigo_Habilitacion)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Codigo_Habilitacion}`)
        getHospitales()
    }

    //DEVOLVER VISTA
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/Hospitales/create' className="btn btn-primary mt-2 mb-2">Crear Hospital</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Codigo Habilitación</th>
                                <th>NIT</th>
                                <th>Nombre</th>
                                <th>Nivel</th>
                                <th>Departamento</th>
                                <th>Municipio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Hospitales.map ((hospital)=>(
                                <tr key={hospital.Codigo_Habilitacion}>
                                    <td>{hospital.Codigo_Habilitacion}</td>
                                    <td>{hospital.NIT}</td>
                                    <td>{hospital.Nombre}</td>
                                    <td>{hospital.Id_Nivel}</td>
                                    <td>{hospital.Id_Departamento}</td>
                                    <td>{hospital.Id_Municipio}</td>
                                    <td>
                                        <Link to={`/Hospitales/edit/${hospital.Codigo_Habilitacion}`} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteHospital(hospital.Codigo_Habilitacion)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
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
export default CompShowHospitales