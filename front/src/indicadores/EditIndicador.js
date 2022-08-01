import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Indica from '../resources/KPI.png'

const URI='http://localhost:5500/Indicadores_Calidad/'

const CompEditIndicador=()=>{
    const [Nombre_Indicador, setNombre_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const navigate=useNavigate()
    const {Id_Indicador}=useParams()

    //Actualizar un indicador
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Indicador,{
            Nombre_Indicador:Nombre_Indicador,
            Activa: Activa
        })
        navigate('/Indicadores_Calidad')
    }

    useEffect(()=>{
        getIndicadorById()
    },[])

    const getIndicadorById=async()=>{
        const res= await axios.get(URI+Id_Indicador)
        setNombre_Indicador(res.data.Nombre_Indicador)
        setActiva(res.data.Activa)
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
                                <h3 className="register-heading">Editar Indicador Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-9">
                                        <label className="mb-2">Nombre</label>
                                        <input
                                            value={Nombre_Indicador} 
                                            onChange={(e)=>setNombre_Indicador(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre"
                                        required/>
                                    </div>
                                    <div className="col-md-9">
                                        <label className="mb-2">Activa</label>
                                        <div>
                                            <input
                                                value={Activa}
                                                onChange={(e)=>setActiva(e.target.value)}
                                                type="checkbox"
                                                className="cbox2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Indicadores_Calidad'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditIndicador