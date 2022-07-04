import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Municipios/'

const CompCreateMunicipio=()=>{
    //CONFIGURAR HOOKS
    const [Id_Municipio, setId_Municipio]=useState('')
    const [Nombre_Municipio, setNombre_Municipio]=useState('')
    const [Id_Departamento, setId_Departamento]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Municipio:Id_Municipio, Nombre_Municipio:Nombre_Municipio, Id_Departamento:Id_Departamento})
        navigate('/Municipios')
    }
    
    return(
        <div>
            <h3>Crear Municipio</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Municipio</label>
                    <input
                        value={Id_Municipio}
                        onChange={(e)=>setId_Municipio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre Municipio</label>
                    <input
                        value={Nombre_Municipio}
                        onChange={(e)=>setNombre_Municipio(e.target.value)}
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
                <button type="submit" className="btn btn-success"><i class="fa-regular fa-square-plus"></i></button>
        </form>
        </div>
        
    ) 
}

export default CompCreateMunicipio