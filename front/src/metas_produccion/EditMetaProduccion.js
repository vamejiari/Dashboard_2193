import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import met from '../resources/Meta.png'

const URI='http://localhost:5500/Metas_Produccion/'

const CompEditMetaProduccion=()=>{
    const [Valor_Meta, setValor_Meta]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Produccion, Anio}=useParams()

    //Guardar información
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Anio}`,{
            Valor_Meta:Valor_Meta
        })
        navigate('/Metas_Produccion')
    }
    useEffect(()=>{
        getMetaByData()
    },[])
    const getMetaByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Anio}`)
        setValor_Meta(res.data.Valor_Meta)
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
                                <h3 class="register-heading">Editar Meta Produccion</h3>
                                <div class="row register-form">
                                    <div class="col-md-7">
                                        <label className="mb-2">Valor</label>
                                        <input
                                            value={Valor_Meta} 
                                            onChange={(e)=>setValor_Meta(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Tipo Meta"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Metas_Produccion'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </form>
    )
}

export default CompEditMetaProduccion