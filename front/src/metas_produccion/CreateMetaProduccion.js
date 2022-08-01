import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import met from '../resources/Meta.png'

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
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={met} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Meta Produccion</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id Meta</label>
                                        <input 
                                            value={Id_Meta}
                                            onChange={(e)=>setId_Meta(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Código Habilitación</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="mb-2">Variable</label>
                                        <input 
                                            value={Id_Variable_Produccion}
                                            onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Variable" 
                                        required/>
                                    </div>
                                    
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Año</label>
                                        <input 
                                            value={Anio}
                                            onChange={(e)=>setAnio(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Año" 
                                        required/>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="mb-2">Valor Meta</label>
                                        <input 
                                            value={Valor_Meta}
                                            onChange={(e)=>setValor_Meta(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Valor" 
                                        required/>
                                    </div>
                                    
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Metas_Produccion'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateMetaProduccion