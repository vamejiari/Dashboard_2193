import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Registros_Calidad/'

const CompCreateRegistroCalidad=()=>{
    const [Id_Registro_Calidad, setId_Registro_Calidad]=useState('')
    const [Cantidad, setCantidad]=useState('')
    const [Id_Variable_Calidad, setId_Variable_Calidad]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Id_Periodo, setId_Periodo]=useState('')
    const [Id_Registro_Indicador, setId_Registro_Indicador]=useState('')
    const [Id_Consolidado_Calidad, setId_Consolidado_Calidad]=useState('')
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Registro_Calidad:Id_Registro_Calidad, Cantidad:Cantidad, Id_Variable_Calidad:Id_Variable_Calidad, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Id_Periodo:Id_Periodo, Id_Registro_Indicador:Id_Registro_Indicador, Id_Consolidado_Calidad:Id_Consolidado_Calidad})
        navigate('/Registros_Calidad')
    }

    return(
        <div>
            <h3>Crear Registro Calidad</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Registro Calidad</label>
                    <input
                        value={Id_Registro_Calidad}
                        onChange={(e)=>setId_Registro_Calidad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input
                        value={Cantidad}
                        onChange={(e)=>setCantidad(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id Variable Calidad</label>
                    <input
                        value={Id_Variable_Calidad}
                        onChange={(e)=>setId_Variable_Calidad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Código Habilitacion</label>
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
                <div className="mb-3">
                    <label className="form-label">Periodo</label>
                    <input
                        value={Id_Periodo}
                        onChange={(e)=>setId_Periodo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
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
                    <label className="form-label">Id Consolidado Calidad</label>
                    <input
                        value={Id_Consolidado_Calidad}
                        onChange={(e)=>setId_Consolidado_Calidad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateRegistroCalidad