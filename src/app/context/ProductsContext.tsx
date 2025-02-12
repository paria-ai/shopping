'use client'
import axios from "axios"
import { createContext, useEffect, useReducer, useState } from "react"

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
interface CartItem extends Product{
    quantity:number;
}
interface CartAction {
    type:string
     //eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?:any
}


const initialCart:CartItem[]= localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")as string):[];

const cartReducer=(state:CartItem[],action:CartAction):CartItem[]=>{
    switch(action.type){
        case "ADD_TO_CART":
            const existingItem = state.find (item=>item.id === action.payload.id);
            if(existingItem){
                return state.map(item=>item.id === action.payload.id ?{...item,quantity:item.quantity + 1 }:item);
            } else{
                return[...state,{...action.payload,quantity :1}];
            }
        case "REMOVE_FROM_CART":
            return state.filter(item=>item.id !== action.payload);
        case "UPDATE_QUANTITY":
            return state.map(item=>item.id === action.payload.id ? {...item,quantity:action.payload.quantity}:item);
        case "CLEAR_CART":
            return[];
            
        default:
            return state;
    }
};

interface ProductContextType{
    allProducts:Product[];
    limitedProducts:Product[];
    cart:CartItem[];
    addToCart:(product:Product)=>void;
    removeFromCart :(id:number)=>void;
    updateQuantity:(id:number, quality:number)=>void;
    clearCart:()=>void


}
export const ProductsContext=createContext<ProductContextType |undefined>(undefined);
type ProductsProviderType={
    children:React.ReactNode
}
export default function ProductsProvider({children}:ProductsProviderType){
    const [allProducts,setAllProducts]=useState<Product[]>([]);
    const [limitedProducts,setLimitedProducts]=useState<Product[]>([]);
    const [cart,dispatch]=useReducer(cartReducer,initialCart);

    useEffect(()=>{
        const fetchAllProduct = async ()=>{
            try{
                const response= await axios.get('https://dummyjson.com/products?limit=15');
                setAllProducts(response.data.products);
            }catch(error){
                console.log('Error fetching all products:',error)
            }
        };
        const fetchLimited = async ()=>{
            try{
                const response = await axios.get('https://dummyjson.com/products?limit=8');
                setLimitedProducts(response.data.products);
            }catch(error){
                console.log('Error fetching all products:',error)
            }
        };
        fetchAllProduct();
        fetchLimited();


    },[]);

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);

    const addToCart=(product:Product)=>dispatch({type:"ADD_TO_CART",payload:product});
    const removeFromCart=(id:number)=>dispatch({type:"REMOVE_FROM_CART",payload:id});
    const updateQuantity =(id:number,quantity:number)=>dispatch({type:"UPDATE_QUANTITY",payload:{id,quantity}});
    const clearCart = ()=>dispatch({type:"CLEAR_CART"});


    
    return(
        <ProductsContext.Provider value={{allProducts,limitedProducts,cart,addToCart,removeFromCart,updateQuantity,clearCart}}>
            {children}</ProductsContext.Provider>
    )
}