import React,{ useState } from 'react'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db  } from '../../services/firebase'
import Swal from 'sweetalert2'
import { auth } from '../../services/firebase'


export const Suscribers = () => {

    //Variables de Estado.
    const [email, setEmail] = useState('')
    const dbUser = collection(db, 'suscribers')
    const dbMail = collection(db, 'triggerEmail')

    const Suscribe = (e) => {
        e.preventDefault();
    
        const objNewUser = {
          email: email,
          sus_state: 1
        }

        const emailContent = {
          to: email,
          message: {
            subject: 'Gracias por suscribirte',
            text: 'This is the plaintext section of the email body.',
            html: 'This is the <code>HTML</code> section of the email body.',
          }
    
        }
    
    
        if (dbUser === email) {
          Swal.fire('Ya estas Suscripto')
    
        }
        else
          addDoc(dbUser, objNewUser)
        Swal.fire(
          'Gracias!',
          'Ahora recibiras todas nuestras ofertas!',
          'success'
        )
    
        return addDoc(dbMail, emailContent)
    
      }

    return (
        <div>
            <form onSubmit={Suscribe} >
                <div className="suscriber-Wrapper form-group d-flex ">

                    <input
                        type="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control w-40"
                        placeholder='Ingresar Email'
                        id="email" required>
                    </input>
                    <button
                        type="submit"
                        className="form-control submit rounded-right ">Subscribe</button>
                </div>
                <span className="subheading">Get digital marketing updates in your mailbox</span>
            </form>
        </div>
    )
}
