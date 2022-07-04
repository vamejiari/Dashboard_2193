import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h3>Crear Usuario</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Cédula</label>
                    <input
                        value={Cedula}
                        onChange={(e)=>setCedula(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={Nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input
                        value={Apellidos}
                        onChange={(e)=>setApellidos(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo Usuario</label>
                    <input 
                        value={Tipo_Usuario}
                        onChange={(e)=>setTipo_Usuario(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                        value={Usuario}
                        onChange={(e)=>setUsuario(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        value={Contrasena}
                        onChange={(e)=>setContrasena(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Código Habilitación</label>
                    <input
                        value={Codigo_Habilitacion}
                        onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div mb-3>
                    <label className="form-label">Id Área</label>
                    <input
                        value={Id_Area}
                        onChange={(e)=>setId_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success mb-3"><i class="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    ) 
}

export default CompCreateUsuario