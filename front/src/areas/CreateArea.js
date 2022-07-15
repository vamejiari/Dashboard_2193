import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Areas/'

const CompCreateArea=()=>{
    //CONFIGURAR HOOKS
    const [Id_Area, setId_Area]=useState('')
    const [Nombre_Area, setNombre_Area]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Area:Id_Area, Nombre_Area:Nombre_Area})
        navigate('/Areas')
    }

    return(
        <div>
            <h3>Crear Area</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Área</label>
                    <input
                        value={Id_Area}
                        onChange={(e)=>setId_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre Área</label>
                    <input
                        value={Nombre_Area}
                        onChange={(e)=>setNombre_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}
export default CompCreateArea