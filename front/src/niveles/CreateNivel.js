import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Niveles/'

const CompCreateNivel=()=>{
    //CONFIGURAR HOOKS
    const [Id_Nivel, setId_Nivel]=useState('')
    const [Nombre_Nivel, setNombre_Nivel]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Nivel:Id_Nivel, Nombre_Nivel:Nombre_Nivel})
        navigate('/Niveles')
    }

    return(
        <div>
            <h3>Crear Nivel</h3>
            <form onSubmit={store}>
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
                    <label className="form-label">Nombre Nivel</label>
                    <input
                        value={Nombre_Nivel}
                        onChange={(e)=>setNombre_Nivel(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i class="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateNivel