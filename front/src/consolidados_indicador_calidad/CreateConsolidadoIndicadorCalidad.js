import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Consolidados_Indicadores_Calidad/'

const CompCreateConsolidadoIndicadorCalidad=()=>{
    const [Id_Consolidado_Indicador, setId_Consolidado_Indicador]=useState('')
    const [Total, setTotal]=useState('')
    const [Id_Indicador, setId_Indicador]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Vigencia, setId_Vigencia]=useState('')
    const navigate=useNavigate()

    //Almacenar información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Consolidado_Indicador:Id_Consolidado_Indicador,Total:Total, Id_Indicador:Id_Indicador, Codigo_Habilitacion:Codigo_Habilitacion, Id_Vigencia:Id_Vigencia})
        navigate('/Consolidados_Indicadores_Calidad')
    }

    return(
        <div>
            <h3>Crear Consolidado Indicador Calidad</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Consolidado Indicador Calidad</label>
                    <input
                        value={Id_Consolidado_Indicador}
                        onChange={(e)=>setId_Consolidado_Indicador(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Total</label>
                    <input
                        value={Total}
                        onChange={(e)=>setTotal(e.target.value)}
                        type="number"
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
                    <label className="form-label">Codigo Habilitacion</label>
                    <input
                        value={Codigo_Habilitacion}
                        onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
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

export default CompCreateConsolidadoIndicadorCalidad