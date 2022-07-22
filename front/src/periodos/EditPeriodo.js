import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Calendario from '../resources/Calendario.png'

const URI='http://localhost:5500/Periodos/'

const CompEditPeriodo=()=>{
    const [Mes, setMes]=useState('')
    const [Anio, setAnio]=useState('')
    const navigate=useNavigate()
    const {Id_Periodo}=useParams()

    //Actualizar un periodo
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Periodo,{
            Mes:Mes, 
            Anio:Anio
        })
        navigate('/Periodos')
    }

    useEffect(()=>{
        getPeriodoById()
    },[])

    const getPeriodoById=async()=>{
        const res=await axios.get(URI+Id_Periodo)
        setMes(res.data.Mes)
        setAnio(res.data.Anio)
    }
    return(
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-4 abs-center">
                        <img src={Calendario} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Periodo</h3>
                                <div class="row register-form">
                                    <div class="col-md-5">
                                        <label className="mb-2">Mes</label>
                                        <input
                                            value={Mes} 
                                            onChange={(e)=>setMes(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Mes"
                                        required/>
                                    </div>
                                    <div class="col-md-5">
                                        <label className="mb-2">Año</label>
                                        <input
                                            value={Anio} 
                                            onChange={(e)=>setAnio(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Mes"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Periodos'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>

    )
}

export default CompEditPeriodo