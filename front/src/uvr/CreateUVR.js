import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imagen from '../resources/UVR.png'

const URI='http://localhost:5500/UVRS/'

const CompCreateUVR=()=>{
    //Configurar hooks
    const [Id_UVR, setId_UVR]=useState('')
    const [Ponderado, setPonderado]=useState('')
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Id_Nivel, setId_Nivel]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_UVR:Id_UVR, Ponderado:Ponderado, Id_Variable_Produccion:Id_Variable_Produccion, Id_Nivel:Id_Nivel})
        navigate('/UVRS')
    }
    
    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-4 abs-center">
                        <img src={imagen} className="btn" alt="Mapa" width={390}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div>
                                <h3 className="register-heading">Crear UVR</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id UVR</label>
                                        <input 
                                            value={Id_UVR}
                                            onChange={(e)=>setId_UVR(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Variable Produccion</label>
                                        <input 
                                            value={Id_Variable_Produccion}
                                            onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Variable Producción" 
                                        required/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="mt-3 mb-2">Ponderado</label>
                                        <input 
                                            value={Ponderado}
                                            onChange={(e)=>setPonderado(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Ponderado" 
                                        required/>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <label className="mt-3 mb-2">Nivel</label>
                                        <input 
                                            value={Id_Nivel}
                                            onChange={(e)=>setId_Nivel(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Variable Producción" 
                                        required/>
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/UVRS'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateUVR