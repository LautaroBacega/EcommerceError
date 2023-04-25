import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Envio gratis a partir de $15.000</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Contacto: <a className='text-white' href='tel:+54 2915092263'>+54 2915092263</a></p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Bike Shop</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-2" 
                  placeholder="Buscar producto..." 
                  aria-label="Buscar producto..." 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link
                    to='/compare-product'
                    className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg' alt='compare'></img>
                    <p className='mb-0'>
                      Comparar <br/> productos
                    </p>
                  </Link>
                </div>
                
                <div>
                  <Link 
                    to='/wishlist'
                    className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/wishlist.svg' alt='wishlist'></img>
                    <p className='mb-0'>
                      Favorito <br/> Lista de Deseos
                    </p>
                  </Link>
                </div>

                <div>
                  <Link 
                    to='/login'
                    className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg' alt='user'></img>
                    <p className='mb-0'>
                      Login <br/> Mi Cuenta
                    </p>
                  </Link>
                </div>

                <div>
                  <Link
                    to='/cart'
                    className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/cart.svg' alt='cart'></img>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$0</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt=''/>
                      <span className='me-5 d-inline-block'>Categorias</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li>
                        <Link className="dropdown-item text-white" to="">Another action</Link>
                        </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">Something else here</Link>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className='menu-links'>
                  <div className='d-flex aling-items-center gap-15'>
                    <NavLink to='/'>Inicio</NavLink>
                    <NavLink to='/product'>Tienda</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contacto</NavLink>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header