import { useState } from 'react'
import './App.css'
import { Nav } from './components/nav'
function App() {


  return (
    <>
      <Nav></Nav>
      <div className="header">
        <div className="headerLeft">
          <h1>Quality cleaning for your home</h1>
          <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          <div className="get">
            <button>Get a free quote</button>
            <i className='bx bxs-phone'></i>
            <ul>
              <li>Call us now</li>
              <b>(414) 567 - 2109</b>
            </ul>
          </div>
        </div>
        <div className="headerRight">
        </div>
      </div>
      <div className="about">
        <h1>About Us</h1>
        <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non <br /> ultrices massa id egestas quam velit pretium nu.</p>
        <div className="aboutItem">
          <div className="item1">
            <div className="img"></div>
            <h2>1. Schedule online</h2>
            <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </div>
          <div className="item2">
           <div className="img"></div>
            <h2>2. Pay online easily</h2>
            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
          </div>
          <div className="item3">
            <div className="img"></div>
            <h2>2. Pay online easily</h2>
            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
