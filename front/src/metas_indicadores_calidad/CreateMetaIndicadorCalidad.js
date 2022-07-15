import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Metas_Indicadores_Calidad/'

const CompCreateMetaIndicadorCalidad=()=>{
    //CONFIGURAR HOOKS
    const [Id_Meta_Indicador, setId_Meta_Indicador]=useState('')
    const [Tipo_Meta, setTipo_Meta]=useState('')
    const [Valor, setValor]=useState('')
    const [Id_Indicador, setId_Indicador]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Meta_Indicador:Id_Meta_Indicador, Tipo_Meta:Tipo_Meta, Valor:Valor, Id_Indicador:Id_Indicador})
        navigate('/Metas_Indicadores_Calidad')
    }

    return(
        <div>
            <h3>Crear Meta Indicador Calidad</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Meta Indicador</label>
                    <input
                        value={Id_Meta_Indicador}
                        onChange={(e)=>setId_Meta_Indicador(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo Meta</label>
                    <input
                        value={Tipo_Meta}
                        onChange={(e)=>setTipo_Meta(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Valor Meta</label>
                    <input
                        value={Valor}
                        onChange={(e)=>setValor(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Indicador</label>
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

export default CompCreateMetaIndicadorCalidad