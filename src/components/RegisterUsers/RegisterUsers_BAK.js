import React, { useState } from 'react'
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../services/firebase'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Swal from 'sweetalert2'


export const RegisterUsers = () => {
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [address, setAddress] = useState('')
    const [idnumber, setIdnumber] = useState('')

    const [actuser,setUser] = useState('')

    
    const dbUser = collection(db, 'users')
    console.log('Usuario Actual: ' + actuser)

    const RegisterUser = (e) => {
        e.preventDefault();
        
      
            if(actuser === email){
                Swal.fire('Ya te encuentras registrado')
            }
            else{
                createUserWithEmailAndPassword(auth, email, pass)
                .then(auth => console.log(auth))
                .catch(error => alert(error))
                
                const batch = db.batch();
                
                const objNewUser = {
                    uId : auth.currentUser.uid,
                    addres: address,
                    idnumber:idnumber
                }
    
                addDoc(dbUser, objNewUser)
                
                Swal.fire('Registro Finalizado')
            }
    }
    
    
    
    return (
        
        
            <div className='container-fluid bg-blue-100 p-0 '>

                <div className='row pt-2 pb-2'>
                    <div className='col-xl-6 col-md-6'>
                        <h1>Registrate</h1>
                        <img className='img-fluid' src='https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png'></img>
                    </div>
                    <div className='col-xl-6 col-md-6 bg-indigo-900'>
                        <form onSubmit={RegisterUser}>
                            <div className='mb-3'>

                                <label className='form-label text-light fw-bold'>Email</label>
                                <input
                                    type="email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="form-control"
                                    placeholder='Ingresar Email'
                                    id="email" required>
                                </input>

                                <label className='form-label text-light fw-bold'>Password</label>
                                <input
                                    type="password"
                                    onChange={(e) => { setPass(e.target.value) }}
                                    className="form-control"
                                    placeholder='Ingresar Password'
                                    id="password" required>
                                </input>

                                <label className='form-label text-light fw-bold'>DNI</label>
                                <input
                                    type="number"
                                    onChange={(e) => { setIdnumber(e.target.value) }}
                                    className="form-control"
                                    placeholder='Ingresar DNI'
                                    id="idNumber" required>
                                </input>

                                <label className='form-label text-light fw-bold'>Address</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setAddress(e.target.value) }}
                                    className="form-control"
                                    placeholder='Ingresar Direccion'
                                    id="address1" required>
                                </input>
                                <button type='submit' className='btn btn-info mt-2'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
    )
    
}
