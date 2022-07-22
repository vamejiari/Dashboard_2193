import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Check from '../resources/CheckList.png'

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
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={Check} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content mt-5">
                            <div>
                                <h3 class="register-heading">Crear Registro Calidad</h3>
                                <div class="row register-form">
                                    <div class="col-md-4">
                                        <label className="mb-2">Id Registro Calidad</label>
                                        <input 
                                            value={Id_Registro_Calidad}
                                            onChange={(e)=>setId_Registro_Calidad(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-7">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div class="col-md-4 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                    <div class="col-md-7 mt-3">
                                        <label className="mb-2">Variable</label>
                                        <input 
                                            value={Id_Variable_Calidad}
                                            onChange={(e)=>setId_Variable_Calidad(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Variable" 
                                        required/>
                                    </div>
                                    <div class="col-md-7 mt-3">
                                        <label className="mb-2">Periodo</label>
                                        <input 
                                            value={Id_Periodo}
                                            onChange={(e)=>setId_Periodo(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Periodo" 
                                        required/>
                                    </div>
                                    <div class="col-md-4 mt-3">
                                        <label className="mb-2">Cantidad</label>
                                        <input 
                                            value={Cantidad}
                                            onChange={(e)=>setCantidad(e.target.value)}
                                            type="number" 
                                            class="form-control" 
                                            placeholder="Cantidad" 
                                        required/>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <label className="mb-2">Registro Indicador</label>
                                        <input 
                                            value={Id_Registro_Indicador}
                                            onChange={(e)=>setId_Registro_Indicador(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Registro Indicador" 
                                        />
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <label className="mb-2">Consolidado Calidad</label>
                                        <input 
                                            value={Id_Consolidado_Calidad}
                                            onChange={(e)=>setId_Consolidado_Calidad(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Consolidado Calidad" 
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Registros_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateRegistroCalidad