import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Registros_Produccion/'

const CompCreateRegistroProduccion=()=>{
    const [Id_Registro, setId_Registro]=useState('')
    const [Poblacion_Pobre, setPoblacion_Pobre]=useState('')
    const [No_Poss, setNo_Poss]=useState('')
    const [Subsidiado, setSubsidiado]=useState('')
    const [Contributivo, setContributivo]=useState('')
    const [Otros, setOtros]=useState('')
    const [Total, setTotal]=useState('')
    const [Calculo_UVR, setCalculo_UVR]=useState('')
    const [Id_Periodo, setId_Periodo]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Id_UVR, setId_UVR]=useState('')
    const [Id_Consolidado, setId_Consolidado]=useState('')
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Registro:Id_Registro, Poblacion_Pobre:Poblacion_Pobre, No_Poss:No_Poss, Subsidiado:Subsidiado, Contributivo:Contributivo, Otros:Otros, Total:Total,Calculo_UVR:Calculo_UVR, Id_Periodo:Id_Periodo, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Id_Variable_Produccion:Id_Variable_Produccion, Id_UVR:Id_UVR, Id_Consolidado:Id_Consolidado})
        navigate('/Registros_Produccion')
    }
    return(
        <div>
            <h3>Crear Registro Produccion</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Registro</label>
                    <input
                        value={Id_Registro}
                        onChange={(e)=>setId_Registro(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Poblacion Pobre</label>
                    <input
                        value={Poblacion_Pobre}
                        onChange={(e)=>setPoblacion_Pobre(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">No Poss</label>
                    <input
                        value={No_Poss}
                        onChange={(e)=>setNo_Poss(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subsidiado</label>
                    <input
                        value={Subsidiado}
                        onChange={(e)=>setSubsidiado(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contributivo</label>
                    <input
                        value={Contributivo}
                        onChange={(e)=>setContributivo(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Otros</label>
                    <input
                        value={Otros}
                        onChange={(e)=>setOtros(e.target.value)}
                        type="number"
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
                    <label className="form-label">Cálculo UVR</label>
                    <input
                        value={Calculo_UVR}
                        onChange={(e)=>setCalculo_UVR(e.target.value)}
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
                    <label className="form-label">Id Variable Produccion</label>
                    <input
                        value={Id_Variable_Produccion}
                        onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id UVR</label>
                    <input
                        value={Id_UVR}
                        onChange={(e)=>setId_UVR(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id Consolidado</label>
                    <input
                        value={Id_Consolidado}
                        onChange={(e)=>setId_Consolidado(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateRegistroProduccion