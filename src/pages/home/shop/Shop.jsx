import {Routes, Route} from 'react-router-dom'
import './shop.css'
import CategoriesPreview from '../../../components/categoriesPreview/CategoriesPreview'
import Category from '../../Category/Category'


const Shop = () => {
  return ( 
   <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=":category" element={<Category />} />
   </Routes>
  )
}

export default Shop
      /*<>
      <h2 className="home-title">{title}</h2>
      <div className='shop-div' >
      {
        categoriesMap[title].map((product) =>(
          <Productss product ={product} key={product.id} />
          
        ))
      }
      
      </div>
      </> */
   