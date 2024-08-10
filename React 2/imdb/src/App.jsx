import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [products, setProducts] = useState([]);
  

  const fetchprod =()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }

  useEffect(()=>{
    fetchprod();
  },[])

  return (
    <>
      <div>
        <h1></h1>
        {
          products?.map((item)=>{
            return (
            <h1>{item.title}</h1>
            )
          })
        }
        </div>
    </>
  )
}

export default App
