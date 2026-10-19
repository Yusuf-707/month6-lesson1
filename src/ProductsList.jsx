import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
export default function ProductsList() {
    const [data, setData] = useState([])

    const getProducts = async () => {
        try{
            const response = await axios.get("https://dummyjson.com/products")
            setData(response.data)
        }catch(err){
            console.log(err)  
        }
    }
    useEffect(()=>{getProducts()}, [])
    console.log(data);
    
  return (
    <section>
        {data.products?.map((product)=>{
            return <ProductCard key={product.id} {...product}/>
        })}
    </section>
  )
}
