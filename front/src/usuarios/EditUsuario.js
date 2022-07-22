import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Usuari from '../resources/Usuario.png'

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
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={Usuari} className="btn" alt="Mapa" width={330}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Usuario</h3>
                                <div class="row register-form">
                                    <div class="col-md-11">
                                        <label className="mb-2">Nombre</label>
                                        <input
                                            value={Nombre} 
                                            onChange={(e)=>setNombre(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre"
                                        required/>
                                    </div>
                                    <div class="col-md-11 mt-3">
                                        <label className="mb-2">Apellidos</label>
                                        <input 
                                            value={Apellidos}
                                            onChange={(e)=>setApellidos(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Apellidos" 
                                        required/>
                                    </div>
                                    <div class="col-md-4 mt-3">
                                        <label className="mb-2">Tipo Usuario</label>
                                        <input 
                                            value={Tipo_Usuario}
                                            onChange={(e)=>setTipo_Usuario(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Tipo Usuario" 
                                        required/>
                                    </div>
                                    <div class="col-md-4 mt-3">
                                        <label className="mb-2">Usuario</label>
                                        <input 
                                            value={Usuario}
                                            onChange={(e)=>setUsuario(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Usuario" 
                                        required/>
                                    </div>
                                    <div class="col-md-3 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Usuario" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5 " id='Agregar'>Editar</button>
                                <Link to={'/Usuarios'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditUsuario