import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Metas_Produccion/'

const CompCreateMetaProduccion=()=>{
    //Configurar hooks
    const [Id_Meta, setId_Meta]=useState('')
    const [Anio, setAnio]=useState('')
    const [Valor_Meta, setValor_Meta]=useState('')
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const navigate=useNavigate()

    //Guardar información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Meta:Id_Meta, Anio:Anio,Valor_Meta:Valor_Meta, Id_Variable_Produccion:Id_Variable_Produccion, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area})
        navigate('/Metas_Produccion')
    }

    return(
        <div>
            <h3>Crear Meta Produccion</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Meta</label>
                    <input
                        value={Id_Meta}
                        onChange={(e)=>setId_Meta(e.target.value)}
                        type="text"
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
                <div className="mb-3">
                    <label className="form-label">Valor Meta</label>
                    <input
                        value={Valor_Meta}
                        onChange={(e)=>setValor_Meta(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
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
                    <label className="form-label">Código Habilitación</label>
                    <input
                        value={Codigo_Habilitacion}
                        onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Área</label>
                    <input
                        value={Id_Area}
                        onChange={(e)=>setId_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateMetaProduccion