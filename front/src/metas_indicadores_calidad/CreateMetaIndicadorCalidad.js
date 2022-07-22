import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import met from '../resources/Meta.png'

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
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={met} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content mt-5">
                            <div>
                                <h3 class="register-heading">Crear Meta Indicador Calidad</h3>
                                <div class="row register-form">
                                    <div class="col-md-4">
                                        <label className="mb-2">Id Meta Indicador</label>
                                        <input 
                                            value={Id_Meta_Indicador}
                                            onChange={(e)=>setId_Meta_Indicador(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-7">
                                        <label className="mb-2">Indicador</label>
                                        <input 
                                            value={Id_Indicador}
                                            onChange={(e)=>setId_Indicador(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Indicador" 
                                        required/>
                                    </div>
                                    <div class="col-md-6 mt-3">
                                        <label className="mb-2">Tipo Meta</label>
                                        <input 
                                            value={Tipo_Meta}
                                            onChange={(e)=>setTipo_Meta(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Tipo" 
                                        required/>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <label className="mb-2">Valor Meta</label>
                                        <input 
                                            value={Valor}
                                            onChange={(e)=>setValor(e.target.value)}
                                            type="number" 
                                            class="form-control" 
                                            placeholder="Valor" 
                                        required/>
                                    </div>
                                    
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Metas_Indicadores_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateMetaIndicadorCalidad