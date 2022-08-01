import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Check from '../resources/CheckList.png'

const URI='http://localhost:5500/Registros_Calidad/'

const CompEditRegistroCalidad=()=>{
    const [Cantidad, setCantidad]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Calidad, Id_Periodo}=useParams()

    //Actualizar un registro
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Periodo}`,{
            Cantidad:Cantidad
        })
        navigate('/Registros_Calidad')
    }

    useEffect(()=>{
        getRegistroByData()
    },[])

    const getRegistroByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Periodo}`)
        setCantidad(res.data.Cantidad)
    }
    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-4 abs-center">
                        <img src={Check} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Registro Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-7">
                                        <label className="mb-2">Cantidad</label>
                                        <input
                                            value={Cantidad} 
                                            onChange={(e)=>setCantidad(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Cantidad"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Registros_Calidad'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditRegistroCalidad