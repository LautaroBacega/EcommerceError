import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
            </div>
            <div className='blog-content'>
              <p className='date'> 1 de diciembre, 2022</p>
              <h5 className='title'>Ingrese Titulo</h5>
              <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Link to='/blog/:id' className='button'>Leer Mas</Link>
            </div>
        </div>
  )
}

export default BlogCard