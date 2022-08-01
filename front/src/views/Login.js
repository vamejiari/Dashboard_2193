import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Login/'

const Login=()=>{
    const [Login, setLogin]=useState({usuario:'', contrasena:''})
    const navigate=useNavigate()
    const inputChange=({target})=>{
        const {name, value}=target
        setLogin({
            ...Login,
            [name]:value
        })
    }

    const onSubmit=async()=>{
        await axios.post(URI, {Usuario:Login.usuario, Contrasena:Login.contrasena})
        .then(({data})=>{
            navigate('/Main')
        })
        .catch(({response})=>{
          console.log(response.data)
        })
        
        
    }

    return(
        <div>
        <section className="vh-40 gradient-custom">
            <div className="container py-4 h-60">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-11 col-md-8 col-lg-6 col-xl-5">
                        <div className="card text-black">
                            <div className="card-body p-4 text-center" id='bg-login'>
                                <div className="mb-md-2 mt-md-2 pb-1">
                                <h2 className="fw-bold mb-2 text-uppercase">Ingresar</h2>
                                <p className="text-black mb-3">Por favor ingrese su usuario y contraseña</p>

                                <div className="form-outline form-white mb-3">
                                    <input
                                        value={Login.usuario}
                                        onChange={inputChange} 
                                        type="text" 
                                        id="typeUsuarioX" 
                                        className="form-control form-control-lg" 
                                        name='usuario'
                                    />
                                    <label className="form-label">Usuario</label>
                                </div>

                                <div className="form-outline form-white mb-3">
                                <input
                                        value={Login.contrasena}
                                        onChange={inputChange} 
                                        type="password" 
                                        id="typePasswordX" 
                                        className="form-control form-control-lg" 
                                        name='contrasena'
                                    />
                                    <label className="form-label mb-3">Contraseña</label>
                                </div>
                                <button className="btn btn-dark md-3" type="submit" onClick={()=>onSubmit()}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        

        
    )
}

export default Login