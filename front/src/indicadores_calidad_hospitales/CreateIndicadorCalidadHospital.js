import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Indicadores_Calidad_Hospitales/'

const CompCreateIndicadorCalidadHospital=()=>{
    //Hooks
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Indicador, setId_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Codigo_Habilitacion:Codigo_Habilitacion, Id_Indicador:Id_Indicador, Activa:Activa})
        navigate('/Indicadores_Calidad_Hospitales')
    }

    return(
        <div>
            <h3>Crear Indicadores de Calidad Hospital</h3>
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
                    <label className="form-label">Id Indicador</label>
                    <input
                        value={Id_Indicador}
                        onChange={(e)=>setId_Indicador(e.target.value)}
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

export default CompCreateIndicadorCalidadHospital