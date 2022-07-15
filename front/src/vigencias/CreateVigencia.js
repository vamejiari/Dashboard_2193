import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Vigencias/'

const CompCreateVigencia=()=>{
    //Hooks
    const [Id_Vigencia, setId_Vigencia]=useState('')
    const [Trimestre, setTrimestre]=useState('')
    const [Anio, setAnio]=useState('')
    const navigate=useNavigate()

    //Guardar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Vigencia:Id_Vigencia, Trimestre:Trimestre, Anio:Anio})
        navigate('/Vigencias')
    }
    
    return(
        <div>
            <h3>Crear Vigencia</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Vigencia</label>
                    <input
                        value={Id_Vigencia}
                        onChange={(e)=>setId_Vigencia(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Trimestre</label>
                    <input
                        value={Trimestre}
                        onChange={(e)=>setTrimestre(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Año</label>
                    <input
                        value={Anio}
                        onChange={(e)=>setAnio(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateVigencia