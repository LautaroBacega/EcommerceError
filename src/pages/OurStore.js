import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component"
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';
import { useEffect } from 'react';

const OurStore = () => {

    const [grid, SetGrid] = useState(4);

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        dispatch(getAllProducts());
    } 

  return (
    <>
        <Meta title={'Our Store'}/>
        <BreadCrumb title='Our Store'/>
        <Container class1='store-wrapper home-wrapper-2 py-5'> 
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop by Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>

                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            {/* Hora 4.00.00 */}

                            <div>
                                <h5 className='sub-title'>Disponibilidad</h5>
                                <div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value='' 
                                            id=''
                                        />
                                        <label className='form-check-label' for=''>
                                            In Stock (1)
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor=''>
                                            Out of Stock (0)
                                        </label>
                                    </div>

                                </div>
                                <h5 className='sub-title'>Precio</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input 
                                            type="email" 
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                    <label htmlFor="floatingInput">
                                            From
                                        </label>
                                    </div>
                                    <div className="form-floating">
                                        <input 
                                            type="email" 
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="to"
                                        />
                                        <label htmlFor="floatingInput">
                                            To
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Colors</h5>
                                <div className='d-flex flex-wrap'> 
                                    <Color/>
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value='' 
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            S (2)
                                        </label>
                                </div>
                                <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value='' 
                                            id='color-2'
                                        />
                                        <label className='form-check-label' htmlFor='color-2'>
                                            M (2)
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Auriculares</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Celulares</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Computadoras</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Parlante</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Random Products</h3>
                            <div>
                                <div className='random-products mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch'></img>
                                    </div>
                                    <div className='w-50'>
                                        <h5>Kids headphones bulk 10 pack muli colored for students</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                                <div className='random-products d-flex'>
                                    <div className='w-50'>
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch'></img>
                                    </div>
                                    <div className='w-50'>
                                        <h5>Kids headphones bulk 10 pack muli colored for students</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{width: '100px'}}>Ordenar por:</p>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='manual'>Featured</option>
                                        <option value='best-selling'>Best Selling</option>
                                        <option value='Alfabeticamente-ascendente'>Alfabeticamente, A-Z</option>
                                        <option value='Alfabeticamente-descendente'>Alfabeticamente, Z-A</option>
                                        <option value='precio-ascendente'>Precio, bajo a mas alto</option>
                                        <option value='precio-descendente'>Precio, alto a mas bajo</option>
                                        <option value='fecha-ascendente'>Fecha, antiguo a nuevo</option>
                                        <option value='fecha-descendente'>Fecha, nuevo a antiguo</option>
                                    </select>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0'>21 productos</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => {
                                                SetGrid(3)
                                            }}                      
                                                src='images/gr4.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img onClick={() => {
                                                SetGrid(4)
                                            }} 
                                                src='images/gr3.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img onClick={() => {
                                                SetGrid(6)
                                            }} 
                                                src='images/gr2.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img onClick={() => {
                                                SetGrid(12)
                                            }} 
                                                src='images/gr.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default OurStore