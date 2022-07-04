import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Areas_Hospitales'

const CompCreateAreaHospital=()=>{
    //CONFIGURAR HOOKS
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACION
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area})
        navigate('/Areas_Hospitales')
    }

    return(
        <div>
            <h3>Crear Área Hospital</h3>
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
                    <label className="form-label">Id Área</label>
                    <input
                        value={Id_Area}
                        onChange={(e)=>setId_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i class="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateAreaHospital