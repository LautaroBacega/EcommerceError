import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component"
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {TbGitCompare} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import Container from '../components/Container';

const SingleProduct = () => {

    const props = {width: 500, height: 500, zoomWidth: 500, img: "https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png"};
    const[orderedProduct, setorderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

  return (
    <>
        <Meta title={'Single Product'}/>
        <BreadCrumb title='Single Product'/>
        <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png' className='img-fluid' alt=''/>
                                </div>
                                <div>
                                    <img src='https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png' className='img-fluid' alt=''/>
                                </div>
                                <div>
                                    <img src='https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png' className='img-fluid' alt=''/>
                                </div>
                                <div>
                                    <img src='https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png' className='img-fluid' alt=''/>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>SmartWatch Apple</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$ 100</p>
                                    <div className='d-flex align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 reviews) </p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>

                                <div className='py-3'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type:</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className='product-data'>Havellls</p>
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category:</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags:</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability:</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>

                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size:</h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border-1 bg-white text-dark border border-secondary'>S</span>
                                            <span className='badge border-1 bg-white text-dark border border-secondary'>M</span>
                                            <span className='badge border-1 bg-white text-dark border border-secondary'>XL</span>
                                            <span className='badge border-1 bg-white text-dark border border-secondary'>XXL</span>
                                        </div>
                                    </div>

                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Color:</h3>
                                        <Color/>
                                    </div>

                                    <div className='d-flex gap-15 flex-row mt-2 mb-3 align-items-center'>
                                        <h3 className='product-heading'>Quantity:</h3>
                                        <div className=''>
                                            <input
                                                type='number'
                                                name=''
                                                min={1}
                                                max={10}
                                                className='form-control'
                                                style={{width: '70px'}}
                                                id=''
                                            />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>Add to Cart</button>
                                            <button className='button border-0' type='submit'>Buy it now</button>
                                        </div>
                                    </div>

                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading'>Shipping & Returns:</h3>
                                        <p className='product-data'>Free shipping and return available on all orders! We ship all US domestic orders within
                                        <b>5-10 business days!</b></p>
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Product Link:</h3>
                                        <a href='javascript:void(0)' onClick={() => copyToClipboard('https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png')}>Copy Product Link</a>
                                    </div>

                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=''> 
                                                <TbGitCompare className='fs-5 me-2'/>
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                        <a href=''>
                                            <AiOutlineHeart className='fs-5 me-2'/>
                                            Add to WishList</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>

        <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <h4>Description</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
        </Container>

        <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Costumer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>

                                {orderedProduct && (
                                    <div>
                                        <a href='' className='text-dark text-decoration-underline'>
                                            Write a Review
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div className='review-form py-4'>
                                <h4 className=''>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea 
                                        name=''
                                        id=''
                                        className='w-100 form-control'
                                        cols='30'
                                        rows='4'
                                        placeholder='Comments'
                                        ></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>

                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Navdeep</h6>
                                        <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>Lorem Lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>

        <Container class1='popular-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                        <h3 className='section-heading'>Popular products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard/>
                    </div>
        </Container>
    </>
  )
}

export default SingleProduct