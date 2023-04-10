import React, {useContext} from 'react'
import CategoryPreview from '../categoryPreview/CategoryPreview'
import { CategoriesContext } from '../../contexts/Products.context'

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext)
  return (
    <div className='cat-div'>
    {Object.keys(categoriesMap).map((title)=>{
      const products=categoriesMap[title]
      return (
      <CategoryPreview key={title} title={title} products={products} />
      )

})
    }
    </div>
  )
}

export default CategoriesPreview