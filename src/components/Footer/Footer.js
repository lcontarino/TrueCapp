import React, { useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'
import { Suscribers } from '../Suscribers/Suscribers';


export const Footer = () => {

  //Variables de Estado.
  const [list, setList] = useState([])


  
  return (
    <footer className='footer-10'>
      <div className='container-fluid px-0 pt-2'>
        <div className='row pt-2  mb-1 pb-2 mx-0 bg-gray-900 w-100 text-center'>
          <div className='md-4'>
            
          </div>
          <div className='col-md-4 mb-md-0 mb-4 pt-2 bg-gray-100'>
            <FontAwesomeIcon icon={faCreditCard} className="credit-card-icon" />
            <h2 className='text-black'>Elegí cómo pagar</h2>
            <p className='footer_box_desc'>
              <span className='text-black'>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta.</span>
            </p>
            <a href="https://www.mercadolibre.com.ar/pagar-online-con-mercadopago">Cómo pagar tus compras</a>
          </div>

          <div className='col-md-4 mb-md-0 mb-4 pt-2 bg-gray-500'>
            <FontAwesomeIcon icon={faBoxArchive} className="box_icon" />
            <h2 className='text-black'>Envío gratis desde $ 4.000</h2>
            <p className='footer_box_desc'>
              <span className='text-black'>Solo por estar registrado en TrueCapp tenés envíos gratis en miles de productos.</span>
            </p>
            <a href="https://www.mercadolibre.com.ar/mercado-puntos/envio-gratis">Conocé más sobre este beneficio</a>
          </div>
          <div className='col-md-4 mb-md-0 mb-4 pt-2 bg-blue-900'>
            <FontAwesomeIcon icon={faShieldDog} className="watchdog_icon" />
            <h2 className='text-black'>Seguridad, de principio a fin</h2>
            <p className='footer_box_desc'>
              <span className='text-black'>¿No te gusta? ¡Devolvelo! En TrueCapp, estás siempre protegido </span>
            </p>
            <a href="https://www.mercadolibre.com.ar/seguridad">Cómo te protegemos</a>
          </div>
        </div>
        <div className='row  mx-0 bg-black w-100 text-center'>
          <div className="col-md-3 mb-md-0 mb-4">
            <h5 className="footer-header">Recibí ofertas y promociones</h5>
            <Suscribers/>
          </div>
          <div className="col-md-3 mb-md-0 mb-4">
            <h2 className="footer-heading">About</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="d-block">Out story</a></li>
              <li><a href="#" className="d-block">Awards</a></li>
              <li><a href="#" className="d-block">Our Team</a></li>
              <li><a href="#" className="d-block">Career</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Company</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="d-block">Our services</a></li>
              <li><a href="#" className="d-block">Clients</a></li>
              <li><a href="#" className="d-block">Contact</a></li>
              <li><a href="#" className="d-block">Press</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Resources</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="d-block">Blog</a></li>
              <li><a href="#" className="d-block">Newsletter</a></li>
              <li><a href="#" className="d-block">Privacy Policy</a></li>
            </ul>
          </div>

        </div>


      </div>
    </footer>
  )
}

export default Footer