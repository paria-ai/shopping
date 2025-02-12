'use client'

import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import Image from "next/image"
import { AiOutlineDelete } from "react-icons/ai";

export default function Factor(){
    const {cart,removeFromCart,updateQuantity,clearCart}=useContext(ProductsContext)!;
    const totalPrice = cart.reduce<number>((acc,item)=>acc + item.price * item.quantity, 0);
    if(cart.length===0){
        return<p className="text-3xl font-bold text-center my-4 h-[255px] ">Empty Shopping Cart</p>
    }
    return(
        <div className="container m-auto text-meshki">
           <p className="text-4xl font-bold font-mono my-9 ml-3">Shopping Cart</p>
           <div className="md:flex md:flex-row justify-center">
           <div className="md:basis-1/2">
           {cart.map(item=>(
            <div key={item.id} className="flex my-3">
                <Image src={item.thumbnail} alt={item.title} width={150} height={200}/> 
                <div className="mt-4">
                <p className="md:text-basis text-sm">{item.title}</p>
                <p className="font-bold md:text-xl text-base">{item.price}$</p>
                <button onClick={()=>updateQuantity(item.id,item.quantity + 1)} className="py-1 px-3 bg-sabz text-kerem  m-2 text-xl rounded-lg hover:text-meshki">+</button>
                <strong>{item.quantity}</strong>
                <button onClick={()=>updateQuantity(item.id,item.quantity - 1)} className="py-1 px-4 bg-sabz text-kerem  m-2 text-xl rounded-lg hover:text-meshki">-</button>
                <button onClick={()=>removeFromCart(item.id)} className="m-2 mt-4"><AiOutlineDelete className="size-5 " /></button>
                </div>
            </div>
           ))}
           
           <button onClick={clearCart} className="text-xl rounded-xl ml-5 my-8 text-sabz hover:text-meshki  p-3 font-mono ">clear factor</button>
           </div>
           <div className=" justify-center md:basis-1/2 text-meshki ml-9">
            <form  className=" border-sabz border-2 w-3/4">
            <p className="text-center font-mono md:text-3xl text-xl mt-3 ">Delivery Information</p>
                <div className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki" >FirstName</label>
               <input type="text" placeholder="Paria " className="w-full py-2 px-1 border-2 border-sabz outline-none"/>
               </div>
               <div   className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki">LastName</label>
               <input  type="text" placeholder="Abedi "  className="w-full py-2 px-1 border-2 border-sabz outline-none"/></div>
               <div className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki">Mobile</label>
               <input type="number" placeholder="+98 9356943000"  className="w-full py-2 px-1 border-2 border-sabz outline-none"/></div>
               <div className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki">Country</label>
               <input type="text" placeholder="Iran"  className="w-full py-2 px-1 border-2 border-sabz outline-none"/></div>
               <div className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki">City</label>
               <input type="text" placeholder="Tehran"  className="w-full py-2 px-1 border-2 border-sabz outline-none"/></div>
               <div className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki">Address</label>
               <input type="text"  className="w-full py-2 px-1 border-2 border-sabz outline-none"/></div>
               <div className="m-4">
                <label className="md:text-xl text-base  my-3 text-meshki">PostCode</label>
               <input type="number"  className="w-full py-2 px-1 border-2 border-sabz outline-none"/></div>
               <div className="border-t-2 border-sabz w-5/6 m-auto py-4">
                <p className="md:text-3xl text-xl font-bold"><strong className="md:text-xl text-lg text-meshki">Total To Pay:</strong> {totalPrice} $</p>
                <button className="w-full bg-meshki  text-bezh py-2  my-3 hover:text-meshki hover:bg-bezh">Buy Now</button>
                </div>
            </form>
           </div>
           </div>
        </div>
    )
}

