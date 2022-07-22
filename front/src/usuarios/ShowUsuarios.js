import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Usuario from '../resources/Usuario.png'

const URI='http://localhost:5500/Usuarios/'

const CompShowUsuarios=()=>{
    //CONFIGURAR HOOKS
    const [Usuarios, setUsuarios]=useState([])
    useEffect(()=>{
        getUsuarios()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODOS LOS USUARIOS
    const getUsuarios=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setUsuarios(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN USUARIO
    const deleteUsuario=async(Cedula)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Cedula}`)
        getUsuarios()
    }

    //DEVOLVER VISTAS
    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="mb-5">
                    <img src={Usuario} className="btn" alt="Hospital" width={290}/>
                </div>
                <div className="col-md-12">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Cédula</th>
                                            <th>Nombre</th>
                                            <th>Apellidos</th>
                                            <th>Código Habilitación</th>
                                            <th>Id Área</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Usuarios.map((usuario)=>(
                                            <tr key={usuario.Cedula}>
                                                <td>{usuario.Cedula}</td>
                                                <td>{usuario.Nombre}</td>
                                                <td>{usuario.Apellidos}</td>
                                                <td>{usuario.Codigo_Habilitacion}</td> 
                                                <td>{usuario.Id_Area}</td>
                                                <td>
                                                    <Link to={`/Usuarios/edit/${usuario.Cedula}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteUsuario(usuario.Cedula)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Usuarios/create" className='btn mb-5' id="Crear">Crear Usuario</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowUsuarios