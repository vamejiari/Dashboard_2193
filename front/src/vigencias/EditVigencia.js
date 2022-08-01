import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Calendario from '../resources/Calendario.png'

const URI='http://localhost:5500/Vigencias/'

const CompEditVigencia=()=>{
    const [Trimestre, setTrimestre]=useState('')
    const [Anio, setAnio]=useState('')
    const navigate=useNavigate()
    const {Id_Vigencia}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN Vigencia
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Vigencia,{
            Trimestre:Trimestre,
            Anio:Anio
        })
        navigate('/Vigencias')
    }
    useEffect(()=>{
        getVigenciaById()
    },[])

    const getVigenciaById=async()=>{
        const res=await axios.get(URI+Id_Vigencia)
        setTrimestre(res.data.Trimestre)
        setAnio(res.data.Anio)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-4 abs-center">
                        <img src={Calendario} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Vigencia</h3>
                                <div className="row register-form">
                                    <div className="col-md-5">
                                        <label className="mb-2">Trimestre</label>
                                        <input
                                            value={Trimestre} 
                                            onChange={(e)=>setTrimestre(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Trimestre"
                                        required/>
                                    </div>
                                    <div className="col-md-5">
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
                                <Link to={'/Vigencias'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditVigencia