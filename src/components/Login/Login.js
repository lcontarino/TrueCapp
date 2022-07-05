import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import './Login.css'
import { auth } from '../../services/firebase'
import Swal from 'sweetalert2';

export const LoginUsers = (props) => {
    const [isLogin, setisLogin] = useState(false);
    const [actUser, setactUser] = useState();

    const SignInUser = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(firebaseUser => Swal.fire('usuario logueado', `${firebaseUser.user.email}`))
            .catch(error => Swal.fire('Error', `${error}`))
        setactUser(!actUser)
    }
    const logOut = () => {

        auth.signOut(auth.currentUser)

            .then(Swal.fire('Sesion cerrada'))
            .catch(error => Swal.fire('Error', `${error}`))
        setactUser(!actUser)

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.emailField.value;
        const password = e.target.passwordField.value;
        console.log(email, password)
        SignInUser(email, password);
    };
    return (
        <div className='container-fluid p-0 '>
            <div className='row pt-2 pb-2'>
                <div className='col-xl-6 col-md-6'>
                    <img className='img-fluid' src='https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png'></img>
                </div>
                <div className='col-xl-6 col-md-6 bg-indigo-900 '>
                    <div className='row py-2 justify-content-center'>
                        <form className='login-body'
                            onSubmit={submitHandler}>
                            <div className='mb-3 '>
                                <h2>LOGIN</h2>
                                <label className='form-label  text-light fw-bold'>Email</label>

                                <input

                                    type="email"
                                    className="form-control"
                                    placeholder='Ingresar Email' id="emailField"
                                >
                                </input>
                                <label className='form-label text-light fw-bold'>PassWord</label>
                                <input

                                    type="password"
                                    className="form-control"
                                    placeholder='Ingresar PassWord'
                                    id="passwordField"
                                >
                                </input>
                                <div className='login-footer'>

                                    <button type='submit'
                                        onClick={() => setisLogin(!isLogin)}
                                        className='login-btn btn btn-info mt-2' >
                                        <h6>Login</h6>
                                    </button>
                                </div>
                                <div className="row justify-content-between mt-2">
                                    <div className="col-md-5 text-light  ">
                                        ¿No tienes cuenta?
                                    </div>
                                    <div className='col-md-5 register-btn btn btn-info mt-2'>

                                        <Link to='/register/'><h6>Registrate</h6></Link>
                                    </div>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
