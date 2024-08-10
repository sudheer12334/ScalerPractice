import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import CartProvider from './context/cart/CartProvider'
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    <>
    <CartProvider>
     <AppRoutes/>
     </CartProvider>
    </>
  )
}

export default App
