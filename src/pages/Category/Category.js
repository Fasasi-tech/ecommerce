import React from 'react'
import {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Productss from '../../components/products/Productss'
import { CategoriesContext } from '../../contexts/Products.context'
import './categorry.css'
const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() =>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

  return (
    <>
        <h2 className='home-title' >{category.toUpperCase()}</h2>
        <div className='shop-div'>
    {
       products && products.map((product)=>(
          <Productss key={product.id} product={product} />  
        ))
    }
</div>
    </>
    
  )
}

export default Category