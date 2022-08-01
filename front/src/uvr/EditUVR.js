import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imagen from '../resources/UVR.png'

const URI='http://localhost:5500/UVRS/'

const CompEditUVR=()=>{
    const [Ponderado, setPonderado]=useState('')
    const navigate=useNavigate()
    const {Id_UVR}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UNA UVR
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_UVR,{
            Ponderado:Ponderado
        })
        navigate('/UVRS')
    }
    useEffect(()=>{
        getUVRById()
    },[])

    const getUVRById=async()=>{
        const res=await axios.get(URI+Id_UVR)
        setPonderado(res.data.Ponderado)
    }
    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-3 abs-center">
                        <img src={imagen} className="btn" alt="Mapa" width={310}/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar UVR</h3>
                                <div className="row register-form">
                                    <div className="col-md-7">
                                        <label className="mb-2">Ponderado</label>
                                        <input
                                            value={Ponderado}
                                            onChange={(e)=>setPonderado(e.target.value)}
                                            type="number"
                                            className="form-control"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Municipios'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form> 
    )
}

export default CompEditUVR