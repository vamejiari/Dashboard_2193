import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Hospitales/'

const CompEditHospital=()=>{
    const [NIT, setNit]=useState('')
    const [Nombre, setNombre]=useState('')
    const [Id_Nivel, setId_Nivel]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN DEPARTAMENTO
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Codigo_Habilitacion,{
            NIT:NIT,
            Nombre:Nombre,
            Id_Nivel:Id_Nivel
        })
        navigate('/Hospitales')
    }

    useEffect(()=>{
        getHospitalByCodigoHabilitacion() 
     },[])
     
    const getHospitalByCodigoHabilitacion=async()=>{
        const res=await axios.get(URI+Codigo_Habilitacion)
        setNit(res.data.NIT)
        setNombre(res.data.Nombre)
        setId_Nivel(res.data.Id_Nivel)
    } 
    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Hospital} className="btn" alt="Mapa" width={330}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Hospital</h3>
                                <div className="row register-form">
                                    <div className="col-md-11">
                                        <label className="mb-2">Nombre</label>
                                        <input
                                            value={Nombre} 
                                            onChange={(e)=>setNombre(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre Municipio"
                                        required/>
                                    </div>
                                    <div className="col-md-7 mt-3">
                                        <label className="mb-2">NIT</label>
                                        <input 
                                            value={NIT}
                                            onChange={(e)=>setNit(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="NIT" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Nivel</label>
                                        <input 
                                            value={Id_Nivel}
                                            onChange={(e)=>setId_Nivel(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nivel" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5 " id='Agregar'>Editar</button>
                                <Link to={'/Hospitales'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form> 
    )
}

export default CompEditHospital

