import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Check from '../resources/CheckList.png'


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
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Check} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Registro Indicador Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id Registro Indiciador Calidad</label>
                                        <input 
                                            value={Id_Registro_Indicador}
                                            onChange={(e)=>setId_Registro_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Periodo</label>
                                        <input 
                                            value={Id_Periodo}
                                            onChange={(e)=>setId_Periodo(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Periodo" 
                                        required/>
                                    </div>
                                    <div className="col-md-7 mt-3">
                                        <label className="mb-2">Indicador</label>
                                        <input 
                                            value={Id_Indicador}
                                            onChange={(e)=>setId_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Indicador" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Total</label>
                                        <input 
                                            value={Total}
                                            onChange={(e)=>setTotal(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Total" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Consolidado Indicador</label>
                                        <input 
                                            value={Id_Consolidado_Indicador}
                                            onChange={(e)=>setId_Consolidado_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Consolidado Indicador" 
                                        />
                                    </div>
                                    
                                    
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Registros_Indicadores_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateRegistroIndicadorCalidad