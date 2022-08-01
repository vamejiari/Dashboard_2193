import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Indica from '../resources/Indicador.png'

const URI='http://localhost:5500/Consolidados_Calidad/'

const CompCreateConsolidadoCalidad=()=>{
    const [Id_Consolidado_Calidad, setId_Consolidado_Calidad]=useState('')
    const [Cantidad, setCantidad]=useState('')
    const [Id_Vigencia, setId_Vigencia]=useState('')
    const [Id_Variable_Calidad, setId_Variable_Calidad]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Id_Consolidado_Indicador, setId_Consolidado_Indicador]=useState('')
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Consolidado_Calidad:Id_Consolidado_Calidad, Cantidad:Cantidad,Id_Vigencia:Id_Vigencia, Id_Variable_Calidad:Id_Variable_Calidad, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Id_Consolidado_Indicador})
        navigate('/Consolidados_Calidad')
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
                                <h3 className="register-heading">Crear Consolidado Variable Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id Consolidado Calidad</label>
                                        <input 
                                            value={Id_Consolidado_Calidad}
                                            onChange={(e)=>setId_Consolidado_Calidad(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Variable Calidad</label>
                                        <input 
                                            value={Id_Variable_Calidad}
                                            onChange={(e)=>setId_Variable_Calidad(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Variable Calidad" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Cantidad</label>
                                        <input 
                                            value={Cantidad}
                                            onChange={(e)=>setCantidad(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        required/>
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <label className="mb-2">Vigencia</label>
                                        <input 
                                            value={Id_Vigencia}
                                            onChange={(e)=>setId_Vigencia(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Vigencia" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Código Habilitación</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <label className="mb-2">Id Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Id Consolidado Indicador</label>
                                        <input 
                                            value={Id_Consolidado_Indicador}
                                            onChange={(e)=>setId_Consolidado_Indicador(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Consolidados_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateConsolidadoCalidad