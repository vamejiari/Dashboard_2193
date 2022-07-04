import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Departamentos/'

const CompCreateDepartamento=()=>{
    //CONFIGURAR HOOKS
    const [Id_Departamento, setId_Departamento]=useState('')
    const [Nombre_Departamento, setNombre_Departamento]=useState('')
    const navigate=useNavigate()
    
    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Departamento: Id_Departamento, Nombre_Departamento:Nombre_Departamento})
        navigate('/Departamentos')
    }

    return(
        <div>
            <h3>Crear Departamento</h3>
            <form onSubmit={store}>
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
                    <label className="form-label">Nombre Departamento</label>
                    <input 
                        value={Nombre_Departamento}
                        onChange={(e)=>setNombre_Departamento(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i class="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateDepartamento