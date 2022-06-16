import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className='footer w-100'>
        <div className='row bg-gray-900'>
            <div className='col-md-4 mb-md-0 mb-4'>
                            <FontAwesomeIcon icon={faCreditCard} className="credit-card-icon" />
                            <h2>Elegí cómo pagar</h2>
                            <p>
                                <span>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta.</span>
                            </p>
                            <a href="https://www.mercadolibre.com.ar/pagar-online-con-mercadopago">Cómo pagar tus compras</a>
            </div>
            
            <div className='col-md-4 mb-md-0 mb-4'>
                            <FontAwesomeIcon icon={faBoxArchive} className="credit-card-icon" />
                            <h2>Envío gratis desde $ 4.000</h2>
                            <p>
                                <span>Solo por estar registrado en TrueCapp tenés envíos gratis en miles de productos.</span>
                            </p>
                            <a href="https://www.mercadolibre.com.ar/mercado-puntos/envio-gratis">Conocé más sobre este beneficio</a>
            </div>
            <div className='col-md-4 mb-md-0 mb-4'>
                            <FontAwesomeIcon icon={faShieldDog} className="credit-card-icon" />
                            <h2>Envío gratis desde $ 4.000</h2>
                            <p>
                            ¿No te gusta? ¡Devolvelo! En TrueCapp, no hay nada que no puedas hacer, porque estás siempre protegido
                            </p>
                            <a href="https://www.mercadolibre.com.ar/seguridad">Cómo te protegemos</a>
            </div>
        </div>
        <div className='row bg-black'>
          <div className='col-md-7'>
            <div className='row'>
            <div className="col-md-4 mb-md-0 mb-4">
              <h2 className="footer-heading">About</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="d-block">Out story</a></li>
                <li><a href="#" className="d-block">Awards</a></li>
                <li><a href="#" className="d-block">Our Team</a></li>
                <li><a href="#" className="d-block">Career</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-4">
              <h2 className="footer-heading">Company</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="d-block">Our services</a></li>
                <li><a href="#" className="d-block">Clients</a></li>
                <li><a href="#" className="d-block">Contact</a></li>
                <li><a href="#" className="d-block">Press</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-4">
              <h2 className="footer-heading">Resources</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="d-block">Blog</a></li>
                <li><a href="#" className="d-block">Newsletter</a></li>
                <li><a href="#" className="d-block">Privacy Policy</a></li>
              </ul>
            </div>
            </div>

          </div>
        <div className="col-md-5 mb-md-0 mb-4">
          <h2 className="footer-heading">Subscribe</h2>
          <form action="#" className="subscribe-form">
            <div className="form-group d-flex">
              {/* <input type="text" className="form-control rounded-left" placeholder="Enter email address"> */}
              <button type="submit" className="form-control submit rounded-right">Subscribe</button>
            </div>
            <span className="subheading">Get digital marketing updates in your mailbox</span>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Footer