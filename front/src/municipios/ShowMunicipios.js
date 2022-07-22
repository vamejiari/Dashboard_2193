import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mapa from "../resources/MapaColombia.png"

const URI='http://localhost:5500/Municipios/'

const CompShowMunicipios=()=>{
    //CONFIGURACION DE HOOKS
    const [Municipios, setMunicipios]=useState([])
    const [Departamentos, setDepartamentos]=useState([])

    useEffect(()=>{
        getMunicipios()
    },[])

    useEffect(()=>{
        getDepartamento()
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

    const getDepartamento=async()=>{
        
    }


    //DEVOLVER VISTA
    return(
        <div class="container register mb-5">
            <div class="row abs-center">
                <div class="col-md-3 abs-center">
                    <img src={Mapa} className="btn" alt="Mapa" width={360}/>
                </div>
                <div class="col-md-9">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Municipio</th>
                                            <th>Departamento</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Municipios.map((municipio)=>(
                                            <tr key={municipio.Id_Municipio}>
                                                <td>{municipio.Nombre_Municipio}</td>
                                                <td>{municipio.Id_Departamento}</td>
                                                <td>
                                                    <Link to={`/Municipios/edit/${municipio.Id_Municipio}`} className='btn btn-info m-1'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteMunicipio(municipio.Id_Municipio)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Municipios/create" className='btn' id="Crear">Crear Municipio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default CompShowMunicipios