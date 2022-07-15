import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Variables_Produccion_Hospitales/'

const CompCreateVariableProduccionHospital=()=>{
    //Configurar hooks
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Procedimiento para guardar la informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Variable_Produccion:Id_Variable_Produccion, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Activa:Activa})
        navigate('/Variables_Produccion_Hospitales')
    }

    return(
        <div>
            <h3>Crear Variables de Producción Hospital</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Variable Producción</label>
                    <input
                        value={Id_Variable_Produccion}
                        onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
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
                    <label className="form-label">Area</label>
                    <input
                        value={Id_Area}
                        onChange={(e)=>setId_Area(e.target.value)}
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

export default CompCreateVariableProduccionHospital