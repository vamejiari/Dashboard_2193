import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Registros_Produccion/'

const CompEditRegistroProduccion=()=>{
    //Hooks
    const [Poblacion_Pobre, setPoblacion_Pobre]=useState('')
    const [No_Poss, setNo_Poss]=useState('')
    const [Subsidiado, setSubsidiado]=useState('')
    const [Contributivo, setContributivo]=useState('')
    const [Otros, setOtros]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Produccion, Id_Periodo}=useParams()

    //Actualizar registro produccion
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Id_Periodo}`,{
            Poblacion_Pobre:Poblacion_Pobre,
            No_Poss:No_Poss,
            Subsidiado:Subsidiado,
            Contributivo:Contributivo,
            Otros:Otros
        })
        navigate('/Registros_Produccion')
    }

    useEffect(()=>{
        getRegistroProduccionByData()
    },[])

    const getRegistroProduccionByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Id_Periodo}`)
        setPoblacion_Pobre(res.data.Poblacion_Pobre)
        setNo_Poss(res.data.No_Poss)
        setSubsidiado(res.data.Subsidiado)
        setContributivo(res.data.Contributivo)
        setOtros(res.data.Otros)
    }
    return(
        <div>
            <h3>Editar registro produccion</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Poblacion Pobre</label>
                    <input
                        value={Poblacion_Pobre}
                        onChange={(e)=>setPoblacion_Pobre(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">No Poss</label>
                    <input
                        value={No_Poss}
                        onChange={(e)=>setNo_Poss(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Subsidiado</label>
                    <input
                        value={Subsidiado}
                        onChange={(e)=>setSubsidiado(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Contributivo</label>
                    <input
                        value={Contributivo}
                        onChange={(e)=>setContributivo(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Otros</label>
                    <input
                        value={Otros}
                        onChange={(e)=>setOtros(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>  
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>  
            </form>
        </div>
    )
}

export default CompEditRegistroProduccion