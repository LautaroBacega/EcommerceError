import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, Location, useLocation } from 'react-router-dom'
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-1.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"


const ProductCard = (props) => {

    const {grid} = props
    let location = useLocation()

  return (
    <>
        <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
            <Link 
                to={`${
                    location.pathname == "/"
                    ? "/product/:id"
                    : location.pathname == "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`}
                className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt='wishlist'/>
                    </button>
                </div>

                <div className='product-image'>
                    <img src={watch} className='img-fluid' alt='product image'/>
                    <img src={watch2} className='img-fluid' alt='product image'/>
                </div>

                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphones bulk 10 pack multi colored</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className='price'>$15.000</p>
                </div>

                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='prodcompare'/>
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt='view'/>
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addcart}alt='addcart'/>
                        </button>
                    </div>
                </div>
            </Link>
        </div>

        <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
            <Link 
                to={`${
                    location.pathname == "/"
                    ? "/product/:id"
                    : location.pathname == "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`}
                className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src={wish} alt='wishlist'/>
                    </Link>
                </div>

                <div className='product-image'>
                    <img src={watch} className='img-fluid' alt='product image'/>
                    <img src={watch2} className='img-fluid' alt='product image'/>
                </div>

                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphones bulk 10 pack multi colored</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className='price'>$15.000</p>
                </div>

                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='prodcompare'/>
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt='view'/>
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addcart} alt='addcart'/>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard