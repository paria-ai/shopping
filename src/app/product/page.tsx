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
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center justify-center">
            {allProducts.map((product)=>(
                <div key={product.id} className="m-3 inline-block">
                     <Link href={`/product/${product.id}`}>
                     <Image src={product.thumbnail} alt={product.title} width={400} height={200} 
                     className=" rounded-2xl  "/>
                    <p className="text-xl my-3">{product.title}</p>
                    <p className="font-bold"><strong>Price:</strong>${product.price}</p></Link>
                    
                    <button onClick={()=>addToCart(product)} className="bg-sabz px-6 py-2 my-3 rounded-md text-kerem hover:text-meshki"><FaCartPlus className="size-4"/></button>
                </div>
            ))}
           </div>
        </div>
    )
}