import React from 'react'
import Directory from '../../../components/directory/Directory'

const Home = () => {
    const Categories=[
        {
          id:1,
          title:"Burger",
          imageUrl:"https://www.linkpicture.com/q/b2_16.png",
          route:'shop/burger'
    
        },
        {
          id:2,
          title:"Watches",
          imageUrl:"https://www.linkpicture.com/q/1-2_10.jpg",
          route:'shop/watches'
        },
        {
          id:3,
          title:"Food",
          imageUrl:"https://www.linkpicture.com/q/f1.jpg",
          route:'shop/food'
        },
        {
          id:4,
          title:"Shoe",
          imageUrl:"https://www.linkpicture.com/q/s1_16.jpg",
          route:'shop/shoe'
        }
      ]
  return (
    <div>
        <Directory Categories={Categories} />
    </div>
  )
}

export default Home