import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Periodos/'

const CompCreatePeriodo=()=>{
    //Hooks
    const [Id_Periodo,setId_Periodo]=useState('')
    const [Mes, setMes]=useState('')
    const [Anio, setAnio]=useState('')
    const [Id_Vigencia, setId_Vigencia]=useState('')
    const navigate=useNavigate()

    //Almacenar información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Periodo:Id_Periodo, Mes:Mes, Anio:Anio, Id_Vigencia:Id_Vigencia})
        navigate('/Periodos')
    }
    return(
        <div>
            <h3>Crea Periodo</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Periodo</label>
                    <input
                        value={Id_Periodo}
                        onChange={(e)=>setId_Periodo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mes</label>
                    <input
                        value={Mes}
                        onChange={(e)=>setMes(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Año</label>
                    <input
                        value={Anio}
                        onChange={(e)=>setAnio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Vigencia</label>
                    <input
                        value={Id_Vigencia}
                        onChange={(e)=>setId_Vigencia(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreatePeriodo