import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Usuarios/create" className="btn btn-primary mt-2 mb-2">Crear Usuario</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Cédula</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Tipo Usuario</th>
                                <th>Usuario</th>
                                <th>Contraseña</th>
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
                                    <td>{usuario.Tipo_Usuario}</td>
                                    <td>{usuario.Usuario}</td>
                                    <td>{usuario.Contrasena}</td>
                                    <td>{usuario.Codigo_Habilitacion}</td> 
                                    <td>{usuario.Id_Area}</td>
                                    <td>
                                        <Link to={`/Usuarios/edit/${usuario.Cedula}`} className="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteUsuario(usuario.Cedula)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowUsuarios