import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Municipios/'

const CompShowMunicipios=()=>{
    //CONFIGURACION DE HOOKS
    const [Municipios, setMunicipios]=useState([])
    useEffect(()=>{
        getMunicipios()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODOS LOS MUNICIPIOS
    const getMunicipios=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setMunicipios(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN MUNICIPIO
    const deleteMunicipio=async(Id_Municipio)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Municipio}`)
        getMunicipios()
    }

    //DEVOLVER VISTA
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Municipios/create" className='btn btn-primary mt-2 mb-2'>Crear Municipio</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Municipio</th>
                                <th>Nombre Municipio</th>
                                <th>Id Departamento</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Municipios.map((municipio)=>(
                                <tr key={municipio.Id_Municipio}>
                                    <td>{municipio.Id_Municipio}</td>
                                    <td>{municipio.Nombre_Municipio}</td>
                                    <td>{municipio.Id_Departamento}</td>
                                    <td>
                                        <Link to={`/Municipios/edit/${municipio.Id_Municipio}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteMunicipio(municipio.Id_Municipio)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
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
export default CompShowMunicipios