import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {

  const productName = "Buzdolabı"
  return (
    <>
      <Product productName="Ayakkabı" price="3200 ₺" />
      <hr />
      <Product productName="Pantolon" price="1500 ₺" />
      <hr />
      <Product productName={productName} price="1500 ₺" />
    </>
  )
}

export default App
