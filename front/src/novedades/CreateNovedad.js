import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Novedades/'

const CompCreateNovedad=()=>{
    //Hooks
    const [Id_Novedad, setId_Novedad]=useState('')
    const [Novedad, setNovedad]=useState('')
    const [Id_Periodo, setId_Periodo]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const navigate=useNavigate()

    //Almacenar información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Novedad:Id_Novedad, Novedad:Novedad, Id_Periodo:Id_Periodo, Codigo_Habilitacion:Codigo_Habilitacion})
        navigate('/Novedades')
    }

    return(
        <div>
            <h3>Crear Novedad</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Novedad</label>
                    <input
                        value={Id_Novedad}
                        onChange={(e)=>setId_Novedad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Novedad</label>
                    <input
                        value={Novedad}
                        onChange={(e)=>setNovedad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
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
                    <label className="form-label">Codigo Habilitacion</label>
                    <input
                        value={Codigo_Habilitacion}
                        onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateNovedad