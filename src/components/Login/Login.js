import React, { useState } from 'react'
import { Link } from "react-router-dom";
import swal from 'sweetalert'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'
import { auth } from '../../services/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const LoginUsers = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    const SignInUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(auth => console.log(auth))
            .catch(error => swal({ title: error }))
        //alert('usuario logueado')

    }
    return (
        <div className='container-fluid p-0 '>
            <div className='row pt-2 pb-2'>
                <div className='col-xl-6 col-md-6'>
                    <img className='img-fluid' src='https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png'></img>
                </div>
                <div className='col-xl-6 col-md-6 bg-indigo-900 '>
                    <div className='py-2 justify-content-center'>
                    <form className='login-body' onSubmit={SignInUser}>
                        <div className='mb-3 '>
                            <h2>LOGIN</h2>
                            <label className='form-label  text-light fw-bold'>Email</label>
                            
                            <input
                             
                                onChange={(e) => { setEmail(e.target.value) }}
                                type= "email" 
                                className="form-control"
                                placeholder= 'Ingresar Email' id="email"
                                required>
                                </input>
                            <label className='form-label text-light fw-bold'>PassWord</label>
                            <input 
                                type="password" 
                                onChange={(e) => { setPass(e.target.value) }} 
                                className="form-control" 
                                placeholder='Ingresar PassWord' 
                                id="password" 
                                required>
                                </input>
                            <div className='login-footer'>
                                
                                <button type='submit' className='login-btn btn btn-info mt-2'><h6>Login</h6></button>
                            </div>
                            <div className='register-btn btn btn-info mt-2'>
                                    <Link to='/register/'><h6>Registrate</h6></Link>
                                </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
