import React from 'react'
import Productss from '../products/Productss'
import './categoryPreview.css'
import {Link} from 'react-router-dom'

const CategoryPreview = ({title, products}) => {
  return (
    <div className="head-div">
        <Link to={title}><h2><span className='home-title'>{title.toUpperCase()}</span></h2></Link>
        <div className='shop-div'>
            {
                products.filter((_, idx) => idx < 4).map((product)=>(
                    <Productss key={product.id} product={product} />
                )
                )

            }
        </div>
    </div>
  )
}

export default CategoryPreview