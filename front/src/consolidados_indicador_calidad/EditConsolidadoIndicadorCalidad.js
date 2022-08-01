import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Indica from '../resources/KPI.png'
const URI='http://localhost:5500/Consolidados_Indicadores_Calidad/'

const CompEditConsolidadoIndicadorCalidad=()=>{
    const [Total, setTotal]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Indicador, Id_Vigencia}=useParams()

    //Actualizar un consolidado indicador
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Indicador}/${Id_Vigencia}`,{
            Total:Total
        })
        navigate('/Consolidados_Indicadores_Calidad')
    }

    useEffect(()=>{
        getConsolidadoIndicadorByData()
    },[])

    const getConsolidadoIndicadorByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Indicador}/${Id_Vigencia}`)
        setTotal(res.data.Total)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-4 abs-center">
                        <img src={Indica} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Consolidado Indicador Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-9">
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
                                <button type="submit" className="btn " id='Agregar'>Editar</button>
                                <Link to={'/Consolidados_Indicadores_Calidad'} className='btn btn-primary' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditConsolidadoIndicadorCalidad