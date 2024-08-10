import {useState,useEffect} from 'react'
import axios from 'axios'
import "./App.css"
const Products=()=>{
  const [prods,setProds]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await axios.get("http://localhost:3000/product");
        console.log(res.data.data);
        setProds(res.data.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[]);
  return(
  <>
    <div>
      <h1>
        These are my prods
       
      </h1>
      <div className="products">
        {prods&&prods.map((prod)=>{
          return (
          
            <div className="product">
            <img src={prod.image}></img>
            <div  key={prod._id}>{prod.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  </>
  )
}

export default Products;