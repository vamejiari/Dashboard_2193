import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Area from '../resources/Area.png'

const URI='http://localhost:5500/Areas/'

const CompEditArea=()=>{
    const [Nombre_Area, setNombre_Area]=useState('')
    const navigate=useNavigate()
    const {Id_Area}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN ÁREA
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Area,{
            Nombre_Area:Nombre_Area
        })
        navigate('/Areas')
    }

    useEffect(()=>{
        getAreaById()
    },[])

    const getAreaById=async()=>{
        const res=await axios.get(URI+Id_Area)
        setNombre_Area(res.data.Nombre_Area)
    }
    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-4 abs-center">
                        <img src={Area} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Área</h3>
                                <div className="row register-form">
                                    <div className="col-md-9">
                                        <label className="mb-2">Nombre Área</label>
                                        <input
                                            value={Nombre_Area} 
                                            onChange={(e)=>setNombre_Area(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre Área"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn " id='Agregar'>Editar</button>
                                <Link to={'/Areas'} className='btn btn-primary' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form> 
    )
}

export default CompEditArea