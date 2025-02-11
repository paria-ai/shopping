'use client'
import Image from "next/image"
import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

export default function Product(){
    const {allProducts,addToCart,}=useContext(ProductsContext)!;
    return(
        <div className="container m-auto my-5">
           <p className="text-4xl font-bold font-mono text-center my-8 text-sabz">All Product</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center justify-center">
            {allProducts.map((product)=>(
                <div key={product.id} className="m-3 inline-block">
                     <Link href={`/product/${product.id}`}>
                     <Image src={product.thumbnail} alt={product.title} width={400} height={200} 
                     className=" rounded-2xl  hover:shadow-md  hover:shadow-sabz"/>
                    <p className="text-xl my-3">{product.title}</p>
                    <p className="font-bold"><strong>Price:</strong>${product.price}</p></Link>
                    
                    <button onClick={()=>addToCart(product)} className="bg-sabz px-6 py-3 my-3 rounded-xl text-meshki border-2 border-meshki"><FaCartPlus className="size-6"/></button>
                </div>
            ))}
           </div>
        </div>
    )
}