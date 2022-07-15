import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Indicadores_Calidad/'

const CompCreateIndicador=()=>{
    //Hooks
    const [Id_Indicador, setId_Indicador]=useState('')
    const [Nombre_Indicador, setNombre_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Almacenar la información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Indicador:Id_Indicador, Nombre_Indicador:Nombre_Indicador, Activa:Activa})
        navigate('/Indicadores_Calidad')
    }

    return(
        <div> 
            <h3>Crear Indicador</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Indicador</label>
                    <input
                        value={Id_Indicador}
                        onChange={(e)=>setId_Indicador(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre Indicador</label>
                    <input
                        value={Nombre_Indicador}
                        onChange={(e)=>setNombre_Indicador(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="cbox2">Activa</label>
                        <div>
                            <input
                                value={isChecked}
                                type="checkbox"
                                onChange={(e)=>setActiva(e.target.value)}
                                className="cbox2"
                            />
                        </div>
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateIndicador