'use client'
import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
interface Product{
    id:number
    title:string
    description:string
    price:number
    thumbnail:string
    brand:string
    warrantyInformation:string
    shippingInformation:string
}

export default function Add({product}:{product:Product}){
    const {addToCart}=useContext(ProductsContext)!;
    return(
        <div> 
            <button className="w-full bg-sabz py-3 mt-5 text-kerem hover:text-meshki" onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    )
}