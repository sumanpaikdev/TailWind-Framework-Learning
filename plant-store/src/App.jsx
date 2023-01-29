import React from 'react'
import './index.css'
import Header from './components/Header'

//pages

// assets
import Bag from "./assets/shop-bag.png"

function App() {

  return (
    <div className="App">
      <Header bag={Bag}/>
    </div>
  )
}

export default App
