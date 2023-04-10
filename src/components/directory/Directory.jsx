import React from 'react'
import Category from '../category/Category'
import './directory.css'
const Directory = ({Categories}) => {
  return (
    <div>
        <div className='directory-container'>
            {Categories.map((category)=>(
            <Category  key={category.id} title={category.title} imageUrl={category.imageUrl} route={category.route} />
            ))}
        </div>
    </div>
  )
}

export default Directory