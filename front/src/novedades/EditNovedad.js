import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import nov from '../resources/Novedad.png'

const URI='http://localhost:5500/Novedades/'

const CompEditNovedad=()=>{
    const [Novedad, setNovedad]=useState('')
    const navigate=useNavigate()
    const {Id_Novedad}=useParams()

    //Actualizar una novedad
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Novedad,{
            Novedad:Novedad
        })
        navigate('/Novedades')
    }

    useEffect(()=>{
        getNovedadById()
    },[])

    const getNovedadById=async()=>{
        const res=await axios.get(URI+Id_Novedad)
        setNovedad(res.data.Novedad)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-4 abs-center">
                        <img src={nov} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Novedad</h3>
                                <div class="row register-form">
                                    <div class="col-md-9">
                                        <label className="mb-2">Novedad</label>
                                        <input
                                            value={Novedad} 
                                            onChange={(e)=>setNovedad(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Novedad"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Novedades'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
        
    )
}

export default CompEditNovedad