import axios from 'axios'
import {useState, useEffect} from 'react'
 import {Link} from 'react-router-dom'
 import Mapa from "../resources/MapaColombia.png"

 const URI='http://localhost:5500/Departamentos/'

 const CompShowDepartamentos=()=>{
    //CONFIGURAR HOOKS
    const [Departamentos, setDepartamentos]=useState([])
    useEffect(()=>{
        getDepartamentos()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODOS LOS DEPARTAMENTOS
    const getDepartamentos=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setDepartamentos(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN DEPARTAMENTO
    const deleteDepartamento=async(Id_Departamento)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Departamento}`)
        getDepartamentos()
    }

    //DEVOLVER VISTA
    return (
        <div class="container register mb-5">
            <div class="row">
                <div class="col-md-3 abs-center">
                    <img src={Mapa} className="btn" alt="Mapa" width={360}/>
                </div>
                <div class="col-md-9">
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Nombre Departamento</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Departamentos.map ((departamento)=>(
                                            <tr key={departamento.Id_Departamento}> 
                                                <td>{departamento.Nombre_Departamento}</td>
                                                <td>
                                                    <Link to={`/Departamentos/edit/${departamento.Id_Departamento}`} className='btn btn-info m-1'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteDepartamento(departamento.Id_Departamento)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))} 
                                    </tbody>
                                </table>
                                <Link to="/Departamentos/create" className='btn' id="Crear">Crear Departamento</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
 }

 export default CompShowDepartamentos