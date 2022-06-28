import React, { useState } from 'react'
import swal from 'sweetalert'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase'

export const LoginUsers = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    // console.log(firebaseConfig.auth());
    const SignInUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(auth => console.log(auth))
            .catch(error => swal({ title: error }))
        //alert('usuario logueado')

    }
    return (
        <div className='container-fluid bg-blue-100 p-0 '>
            <div className='row pt-2 pb-2'>
                <div className='col-xl-6 col-md-6'>
                    <img className='img-fluid' src='https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png'></img>
                </div>
                <div className='col-xl-6 col-md-6 bg-indigo-900'>
                    <form onSubmit={SignInUser}>
                        <div className='mb-3'>
                            <label className='form-label text-light fw-bold'>Email</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" className="form-control"
                                placeholder='Ingresar Email' id="email"
                                required></input>
                            <label className='form-label text-light fw-bold'>PassWord</label>
                            <input 
                                type="password" 
                                onChange={(e) => { setPass(e.target.value) }} 
                                className="form-control" 
                                placeholder='Ingresar PassWord' 
                                id="password" 
                                required></input>
                            
                            
                            
                            <button type='submit' className='btn btn-info mt-2'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
