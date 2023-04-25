import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'
import Container from '../components/Container'
import {services} from '../utils/Data'

const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img 
                  src='images/main-banner-1.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>WeThePeople</h5>
                  <h5>PathFinder</h5>
                  <p>Desde $150000 o $25000/mes.</p>
                  <Link className='button'>COMPRAR</Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img 
                    src='images/catbanner-01.jpg' 
                    className='img-fluid rounded-3' 
                    alt='main banner'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED</h4>
                    <h5>WeThePeople</h5>
                    <p>Desde $150000 <br/> o $25000/mes.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img 
                    src='images/catbanner-02.jpg' 
                    className='img-fluid rounded-3' 
                    alt='main banner'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>Desde $120000 <br/> o $15000/mes.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img 
                    src='images/catbanner-03.jpg' 
                    className='img-fluid rounded-3' 
                    alt='main banner'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>Desde $120000 <br/> o $15000/mes.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img 
                    src='images/catbanner-04.jpg' 
                    className='img-fluid rounded-3' 
                    alt='main banner'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>Desde $120000 <br/> o $15000/mes.</p>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                {services?.map((i,j) => {
                  return(
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='services'/>
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                  )
                })}

              </div>
            </div>
          </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Bicicletas</h6>
                    <h6>Completas</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cuadros</h6>
                    <p>12 productos</p>
                  </div>
                  <img src='images/tv.jpg' alt='tv'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Manubrios</h6>
                    <p>55 productos</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphone'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Horquillas</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='images/camera.jpg' alt='watch'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Bicicletas</h6>
                    <h6>Completas</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cuadros</h6>
                    <p>12 productos</p>
                  </div>
                  <img src='images/tv.jpg' alt='tv'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Manubrios</h6>
                    <p>55 productos</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphone'/>
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Horquillas</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='images/camera.jpg' alt='watch'/>
                </div>

              </div>
            </div>
          </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collections</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </Container>

      <Container class1='famous-warpper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-1.png' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>Desde 399 or $16.60/mo. for 24mo.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-2.png' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits de brillo</h6>
                  <p className='text-dark'>14' pantalla de retina</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-3.png' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>Iphone 13 Pro</h6>
                  <p className='text-dark'>now in green</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-4.png' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Home Speakers</h5>
                  <h6 className='text-dark'>Room-filling sound</h6>
                  <p className='text-dark'>Desde 399 or $16.60/mo. for 24mo.*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='special-weapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Productos Especiales</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProducts/>
            <SpecialProducts/>
            <SpecialProducts/>
            <SpecialProducts/>
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
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
      </Container>

      <Container class1='marque-wrapper py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper'>
                <Marquee className='d-flex'>{/* Imagenes en Movimiento */}
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand'/>
                  </div>
                  
                </Marquee>
              </div>
            </div>
          </div>
      </Container>

      <Container classclass1Name='blog-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Ultimos Blogs</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
          </div>
      </Container>

    </>
  )
}

export default Home