import React from 'react'
import './Spinner.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

 const Spinner = () => {
     return (
         <div className='spinner-wrapper  align-align-items-center'>
             <div className='spinner-wrapper'>
                 <TailSpin
                     height="100"
                     width="100"
                     color='white'
                     ariaLabel='loading'
                 />
             </div>
         </div>
     )
}

export default Spinner