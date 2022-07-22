import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Indica from '../resources/Indicador.png'
const URI='http://localhost:5500/Consolidados_Calidad/'

const CompEditConsolidadoCalidad=()=>{
    const [Cantidad, setCantidad]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Calidad, Id_Vigencia}=useParams()

    //Actualizar un consolidado
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Vigencia}`,{
            Cantidad:Cantidad
        })
        navigate('/Consolidados_Calidad')
    }

    useEffect(()=>{
        getConsolidadoCalidadByData()
    },[])

    const getConsolidadoCalidadByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Vigencia}`)
        setCantidad(res.data.Cantidad)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-4 abs-center">
                        <img src={Indica} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Consolidado Calidad</h3>
                                <div class="row register-form">
                                    <div class="col-md-9">
                                        <label className="mb-2">Cantidad</label>
                                        <input
                                            value={Cantidad} 
                                            onChange={(e)=>setCantidad(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Valor"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn " id='Agregar'>Editar</button>
                                <Link to={'/Consolidados_Calidad'} className='btn btn-primary' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form> 
    )
}

export default CompEditConsolidadoCalidad