import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'
import newsletter from '../images/newsletter.png';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter'></img>
                <h2 className='mb-0 text-white'>Suscribite a nuestros mails</h2>
              </div>
            </div>

            <div className='col-7'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Ingresa tu correo electronico" 
                  aria-label="Ingresa tu correo electronico" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Suscribirme
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
        <div className='row'>

          <div className='col-4'>
            <h4 className='text-white mb-4'>Contactanos</h4>
            <div>
              <address className='text-white fs-6'>
                Bahia Blanca, Buenos Aires, Argentina
                <br/>
                Codigo Postal: 8000
              </address>
              <a href='tel: +54 2915092263 ' className='mt-4 d-block mb-1 text-white'>+54 2915092263</a>
              <a href='mailto: lautibacega@gmail.com' className='mt-2 d-block mb-2 text-white'>lautibacega@gmail.com</a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href='' alt='social icons'>
                  <BsLinkedin className='fs-4'/>
                </a>
                <a className='text-white' href='' alt='social icons'>
                  <BsInstagram className='fs-4'/>
                </a>
                <a className='text-white' href='' alt='social icons'>
                  <BsGithub className='fs-4'/>
                </a>
                <a className='text-white' href='' alt='social icons'>
                  <BsYoutube className='fs-4'/>
                </a>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <h4 className='text-white mb-4'>Informacion</h4>
            <div className='footer-link d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacidad y Politicas</Link>
              <Link to='/refund-policy' className='text-white py-2 mb-1'>Politicas de devolucion</Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-1'>Politicas de compra</Link>
              <Link to='/term-conditions' className='text-white py-2 mb-1'>Terminos y Condiciones</Link>
            </div>
          </div>
            
          <div className='col-3'>
            <h4 className='text-white mb-4'>Mi Cuenta</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Acerca de</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>

          <div className='col-2'>
            <h4 className='text-white mb-4'>Acceso Rapido</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Bicis Completas</Link>
              <Link className='text-white py-2 mb-1'>Partes</Link>
              <Link className='text-white py-2 mb-1'>Indumentaria</Link>
              <Link className='text-white py-2 mb-1'>Team</Link>
            </div>
          </div>
        </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}: Desarrollado por Lautaro Bacega</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer