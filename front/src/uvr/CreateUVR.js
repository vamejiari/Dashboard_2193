import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/UVRS/'

const CompCreateUVR=()=>{
    //Configurar hooks
    const [Id_UVR, setId_UVR]=useState('')
    const [Ponderado, setPonderado]=useState('')
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Id_Nivel, setId_Nivel]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_UVR:Id_UVR, Ponderado:Ponderado, Id_Variable_Produccion:Id_Variable_Produccion, Id_Nivel:Id_Nivel})
        navigate('/UVRS')
    }
    
    return(
        <div>
            <h3>Crear UVR</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id UVR</label>
                    <input
                        value={Id_UVR}
                        onChange={(e)=>setId_UVR(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ponderado</label>
                    <input
                        value={Ponderado}
                        onChange={(e)=>setPonderado(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Variable Produccion</label>
                    <input
                        value={Id_Variable_Produccion}
                        onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nivel</label>
                    <input
                        value={Id_Nivel}
                        onChange={(e)=>setId_Nivel(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateUVR