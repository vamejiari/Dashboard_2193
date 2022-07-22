import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import met from '../resources/Meta.png'

const URI='http://localhost:5500/Metas_Indicadores_Calidad/'

const CompEditMetaIndicadorCalidad=()=>{
    const [Tipo_Meta, setTipo_Meta]=useState('')
    const [Valor, setValor]=useState('')
    const navigate=useNavigate()
    const {Id_Meta_Indicador}=useParams()

    //Actualizar meta de un indicador
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Meta_Indicador,{
            Tipo_Meta:Tipo_Meta,
            Valor:Valor
        })
        navigate('/Metas_Indicadores_Calidad')
    }

    useEffect(()=>{
        getMetaIndicadorById()
    },[])

    const getMetaIndicadorById=async()=>{
        const res=await axios.get(URI+Id_Meta_Indicador)
        setTipo_Meta(res.data.Tipo_Meta)
        setValor(res.data.Valor)
    }
    return(
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-4 abs-center">
                        <img src={met} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Meta Indicador Calidad</h3>
                                <div class="row register-form">
                                    <div class="col-md-7">
                                        <label className="mb-2">Tipo Meta</label>
                                        <input
                                            value={Tipo_Meta} 
                                            onChange={(e)=>setTipo_Meta(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Tipo Meta"
                                        required/>
                                    </div>
                                    <div class="col-md-4">
                                        <label className="mb-2">Valor</label>
                                        <input
                                            value={Valor} 
                                            onChange={(e)=>setValor(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Valor"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Metas_Indicadores_Calidad'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditMetaIndicadorCalidad