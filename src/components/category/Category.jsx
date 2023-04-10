import React from 'react'
import './category.css'
import {useNavigate} from 'react-router-dom'
const Category = ({key, title, imageUrl,route}) => {
  const navigate = useNavigate()
  const onNavigateHandler =()=> navigate(route)
  
  return (
        <div key={key} className="category-div" onClick={onNavigateHandler}>
          <div  className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}/>
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>shop Now</p>
            </div>
        </div>
  )
}

export default Category