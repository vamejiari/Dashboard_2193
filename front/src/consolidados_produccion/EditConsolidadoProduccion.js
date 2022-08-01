import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Producc from '../resources/Produccion.png'
const URI='http://localhost:5500/Consolidados_Produccion/'

const CompEditConsolidadoProduccion=()=>{
    //Hooks
    const [Poblacion_Pobre, setPoblacion_Pobre]=useState('')
    const [No_Poss, setNo_Poss]=useState('')
    const [Subsidiado, setSubsidiado]=useState('')
    const [Contributivo, setContributivo]=useState('')
    const [Otros, setOtros]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Produccion, Id_Vigencia}=useParams()

    //Actualizar registro produccion
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Id_Vigencia}`,{
            Poblacion_Pobre:Poblacion_Pobre,
            No_Poss:No_Poss,
            Subsidiado:Subsidiado,
            Contributivo:Contributivo,
            Otros:Otros
        })
        navigate('/Consolidados_Produccion')
    }

    useEffect(()=>{
        getConsolidadoProduccionByData()
    },[])

    const getConsolidadoProduccionByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Id_Vigencia}`)
        setPoblacion_Pobre(res.data.Poblacion_Pobre)
        setNo_Poss(res.data.No_Poss)
        setSubsidiado(res.data.Subsidiado)
        setContributivo(res.data.Contributivo)
        setOtros(res.data.Otros)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-4 abs-center">
                        <img src={Producc} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Consolidado Produccion</h3>
                                <div className="row register-form">
                                    <div className="col-md-5">
                                        <label className="mb-2">Población Pobre</label>
                                        <input
                                            value={Poblacion_Pobre} 
                                            onChange={(e)=>setPoblacion_Pobre(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Atenciones"
                                        required/>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="mb-2">No Poss</label>
                                        <input
                                            value={No_Poss} 
                                            onChange={(e)=>setNo_Poss(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Atenciones"
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Subsidiado</label>
                                        <input
                                            value={Subsidiado} 
                                            onChange={(e)=>setSubsidiado(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Atenciones"
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Contributivo</label>
                                        <input
                                            value={Contributivo} 
                                            onChange={(e)=>setContributivo(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Atenciones"
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Otros</label>
                                        <input
                                            value={Otros} 
                                            onChange={(e)=>setOtros(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Atenciones"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Editar</button>
                                <Link to={'/Consolidados_Produccion'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditConsolidadoProduccion