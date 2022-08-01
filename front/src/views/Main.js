import { Link } from "react-router-dom"

const URI='http://localhost:5500/Main/'

const Main=()=>{
    return(
        <div>
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-12 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Menú Principal</h3>
                                <div className="row register-form">
                                    <Link to={'/Departamentos'} className='btn mb-3' id='Cancelar' >Departamento</Link> 
                                    <Link to={'/Municipios'} className='btn mb-3' id='Cancelar' >Municipios</Link> 
                                    <Link to={'/Niveles'} className='btn mb-3' id='Cancelar' >Niveles</Link> 
                                    <Link to={'/Hospitales'} className='btn mb-3' id='Cancelar' >Hospitales</Link> 
                                    <Link to={'/Areas'} className='btn mb-3' id='Cancelar' >Áreas</Link> 
                                    <Link to={'/Areas_Hospitales'} className='btn mb-3' id='Cancelar'>Asignar Áreas</Link> 
                                    <Link to={'/Usuarios'} className='btn mb-3' id='Cancelar'>Usuarios</Link> 
                                    <Link to={'/UVRS'} className='btn mb-3' id='Cancelar'>UVR</Link>
                                    <Link to={'/Variables_Produccion'} className='btn mb-3' id='Cancelar'>Variables Producción</Link> 
                                    <Link to={'/Variables_Produccion_Hospitales'} className='btn mb-3' id='Cancelar'>Asignar Variables Producción</Link> 
                                    <Link to={'/Metas_Produccion'} className='btn mb-3' id='Cancelar'>Metas Produccion</Link> 
                                    <Link to={'/Registros_Produccion'} className='btn mb-3' id='Cancelar'>Registros Producción</Link>
                                    <Link to={'/Consolidados_Produccion'} className='btn mb-3' id='Cancelar'>Consolidados Produccion</Link>
                                    <Link to={'/Novedades'} className='btn mb-3' id='Cancelar'>Novedad</Link>
                                    <Link to={'/Periodos'} className='btn mb-3' id='Cancelar'>Periodo</Link>
                                    <Link to={'/Vigencias'} className='btn mb-3' id='Cancelar'>Vigencia</Link>
                                    <Link to={'/Variables_Calidad'} className='btn mb-3' id='Cancelar'>Variables Calidad</Link>
                                    <Link to={'/Variables_Calidad_Hospitales'} className='btn mb-3' id='Cancelar'>Asignar Variable Calidad</Link>
                                    <Link to={'/Indicadores_Calidad'} className='btn mb-3' id='Cancelar'>Indicadores Calidad</Link>
                                    <Link to={'/Indicadores_Calidad_Hospitales'} className='btn mb-3' id='Cancelar'>Asignar Indicador Calidad</Link>
                                    <Link to={'/Metas_Indicadores_Calidad'} className='btn mb-3' id='Cancelar'>Metas Indicador Calidad</Link>                                
                                    <Link to={'/Registros_Indicadores_Calidad'} className='btn mb-3' id='Cancelar'>Registro Indicador Calidad</Link>
                                    <Link to={'/Registros_Calidad'} className='btn mb-3' id='Cancelar'>Registros Calidad</Link>
                                    <Link to={'/Consolidados_Indicadores_Calidad'} className='btn mb-3' id='Cancelar'>Consolidado Indicador Calidad</Link>
                                    <Link to={'/Consolidados_Calidad'} className='btn mb-3' id='Cancelar'>Consolidado Calidad</Link>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>    
            </div>
        </div>
    )
}
export default Main
