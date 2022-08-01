import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usua from '../resources/Usuario.png'

const URI='http://localhost:5500/Usuarios/'

const CompCreateUsuario=()=>{
    //CONFIGURAR HOOKS
    const [Cedula, setCedula]=useState('')
    const [Nombre, setNombre]=useState('')
    const [Apellidos, setApellidos]=useState('')
    const [Tipo_Usuario,setTipo_Usuario]=useState('')
    const [Usuario, setUsuario]=useState('')
    const [Contrasena, setContrasena]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Cedula:Cedula, Nombre:Nombre, Apellidos:Apellidos, Tipo_Usuario:Tipo_Usuario, Usuario:Usuario,Contrasena:Contrasena, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area})
        navigate('/Usuarios')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Usua} className="btn" alt="Mapa" width={330}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Usuario</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <label className="mb-2">Cédula</label>
                                        <input 
                                            value={Cedula}
                                            onChange={(e)=>setCedula(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Cedula" 
                                        required/>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="mb-2">Tipo Usuario</label>
                                        <input 
                                            value={Tipo_Usuario}
                                            onChange={(e)=>setTipo_Usuario(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Tipo Usuario" 
                                        required/>
                                    </div>
                                    <div className="col-md-11">
                                        <label className="mb-2">Nombre</label>
                                        <input 
                                            value={Nombre}
                                            onChange={(e)=>setNombre(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre" 
                                        required/>
                                    </div>
                                    <div className="col-md-11 mt-3">
                                        <label className="mb-2">Apellidos</label>
                                        <input 
                                            value={Apellidos}
                                            onChange={(e)=>setApellidos(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Apellidos" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Usuario</label>
                                        <input 
                                            value={Usuario}
                                            onChange={(e)=>setUsuario(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Usuario" 
                                        required/>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="mb-2">Contraseña</label>
                                        <input 
                                            value={Contrasena}
                                            onChange={(e)=>setContrasena(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Contraseña" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Código Habilitación</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Usuarios'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>

    ) 
}

export default CompCreateUsuario