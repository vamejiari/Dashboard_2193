import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Usuarios/'

const CompEditUsuario=()=>{
    const [Nombre, setNombre]=useState('')
    const [Apellidos, setApellidos]=useState('')
    const [Tipo_Usuario,setTipo_Usuario]=useState('')
    const [Usuario, setUsuario]=useState('')
    const [Contrasena, setContrasena]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const navigate=useNavigate()
    const {Cedula}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN USUARIO
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Cedula,{
            Nombre:Nombre,
            Apellidos:Apellidos,
            Tipo_Usuario:Tipo_Usuario,
            Usuario:Usuario,
            Contrasena:Contrasena,
            Id_Area:Id_Area,
        })
        navigate('/Usuarios')
    }
    useEffect(()=>{
        getUsuarioByCedula()
    },[])

    const getUsuarioByCedula=async()=>{
        const res=await axios.get(URI+Cedula)
        setNombre(res.data.Nombre)
        setApellidos(res.data.Apellidos)
        setTipo_Usuario(res.data.Tipo_Usuario)
        setUsuario(res.data.Usuario)
        setContrasena(res.data.Contrasena)
        setId_Area(res.data.Id_Area)
    }

    return(
        <div>
            <h3>Editar Usuario</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre</label>
                    <input
                        value={Nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Apellidos</label>
                    <input
                        value={Apellidos}
                        onChange={(e)=>setApellidos(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Tipo Usuario</label>
                    <input
                        value={Tipo_Usuario}
                        onChange={(e)=>setTipo_Usuario(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Usuario</label>
                    <input
                        value={Usuario}
                        onChange={(e)=>setUsuario(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Id Área</label>
                    <input
                        value={Id_Area}
                        onChange={(e)=>setId_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditUsuario