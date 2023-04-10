import React from 'react';
import "./App.css"
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home/Home'
import Navigation from './pages/home/navigation/Navigation';
import Shop from './pages/home/shop/Shop';
import Authentication from './pages/authentication/Authentication';
import CheckOut from './components/checkout/CheckOut';
function App() {
  {/*const Categories=[
    {
      id:1,
      title:"Burger",
      imageUrl:"https://www.linkpicture.com/q/b2_16.png",

    },
    {
      id:2,
      title:"Watch",
      imageUrl:"https://www.linkpicture.com/q/1-2_10.jpg",
    },
    {
      id:3,
      title:"Food",
      imageUrl:"https://www.linkpicture.com/q/f1.jpg",
    },
    {
      id:4,
      title:"Shoe",
      imageUrl:"https://www.linkpicture.com/q/s1_16.jpg",
    }
  ] */}
  return (
    <div className="App">
      {/*<Directory Categories={Categories} /> */}
      {/*<div className="App category">
      {categories.map(({title, id, imageUrl})=>(
        <div key={id} className="category-div">
          <div  className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}/>
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>shop Now</p>
            </div>
        </div>
      ))}
    </div> */}
    <Routes >
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home/>} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
    
    </div>
    
  );
}

export default App;
