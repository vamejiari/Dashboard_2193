import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Hospitales/'

const CompCreateHospital=()=>{
    //CONFIGURAR HOOKS
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [NIT, setNit]=useState('')
    const [Nombre, setNombre]=useState('')
    const [Id_Nivel, setId_Nivel]=useState('')
    const [Id_Departamento, setId_Departamento]=useState('')
    const [Id_Municipio, setId_Municipio]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACION
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Codigo_Habilitacion:Codigo_Habilitacion, NIT:NIT, Nombre:Nombre, Id_Nivel:Id_Nivel, Id_Departamento:Id_Departamento, Id_Municipio:Id_Municipio})
        navigate('/Hospitales')
    }
    return(
        <div>
            <h3>Crear Hospital</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Codigo Habilitación</label>
                    <input
                        value={Codigo_Habilitacion}
                        onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">NIT</label>
                    <input
                        value={NIT}
                        onChange={(e)=>setNit(e.target.value)}
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
                    <label className="form-label">Id Nivel</label>
                    <input
                        value={Id_Nivel}
                        onChange={(e)=>setId_Nivel(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id Departamento</label>
                    <input
                        value={Id_Departamento}
                        onChange={(e)=>setId_Departamento(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id_Municipio</label>
                    <input
                        value={Id_Municipio}
                        onChange={(e)=>setId_Municipio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i class="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateHospital