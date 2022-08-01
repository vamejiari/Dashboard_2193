import axios from "axios";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Indica from '../resources/KPI.png'

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
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Indica} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Consolidado Indicador Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-11">
                                        <label className="mb-2">Id Consolidado Indicador Calidad</label>
                                        <input 
                                            value={Id_Consolidado_Indicador}
                                            onChange={(e)=>setId_Consolidado_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-11 mt-3">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <label className="mb-2">Indicador</label>
                                        <input 
                                            value={Id_Indicador}
                                            onChange={(e)=>setId_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Indicador" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Vigencia</label>
                                        <input 
                                            value={Id_Vigencia}
                                            onChange={(e)=>setId_Vigencia(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Vigencia" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Total</label>
                                        <input 
                                            value={Total}
                                            onChange={(e)=>setTotal(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Valor" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Consolidados_Indicadores_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateConsolidadoIndicadorCalidad