import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Registros_Indicadores_Calidad/'

const CompCreateRegistroIndicadorCalidad=()=>{
    const [Id_Registro_Indicador, setId_Registro_Indicador]=useState('')
    const [Total, setTotal]=useState('')
    const [Id_Periodo, setId_Periodo]=useState('')
    const [Id_Consolidado_Indicador, setId_Consolidado_Indicador]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Indicador, setId_Indicador]=useState('')
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Registro_Indicador:Id_Registro_Indicador, Total:Total, Id_Periodo:Id_Periodo, Id_Consolidado_Indicador:Id_Consolidado_Indicador, Codigo_Habilitacion:Codigo_Habilitacion, Id_Indicador:Id_Indicador})
        navigate('/Registros_Indicadores_Calidad')
    }

    return(
        <div>
            <h3>Crear Registro indicador Calidad</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Registro Indicador</label>
                    <input
                        value={Id_Registro_Indicador}
                        onChange={(e)=>setId_Registro_Indicador(e.target.value)}
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
                    <label className="form-label">Id Periodo</label>
                    <input
                        value={Id_Periodo}
                        onChange={(e)=>setId_Periodo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id Condoslidado Indicador</label>
                    <input
                        value={Id_Consolidado_Indicador}
                        onChange={(e)=>setId_Consolidado_Indicador(e.target.value)}
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
                    <label className="form-label">Id Indicador</label>
                    <input
                        value={Id_Indicador}
                        onChange={(e)=>setId_Indicador(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateRegistroIndicadorCalidad