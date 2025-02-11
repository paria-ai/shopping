'use client'
import img from "./../../../public/img/image0.png"
import Image from "next/image"
import { TbShoppingCart } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

export default function Header(){
    return(
        <div className="flex w-full justify-center flex-row ">
            <div className="basis-1/4  items-start text-start ">
           <Image src={img} alt="Logo image" width={150} height={50} className="items-start"/>
            </div>
            <div className="flex basis-1/2 justify-center pt-8 text-center px-3 text-sabz font-bold">
                <Link href="/"><button className="md:px-8 px-1 active:text-bezh">Home</button></Link>
                <Link href="/product"><button className="md:px-8 px-1 active:text-bezh">Product</button></Link>
                <Link href="/"><button className="md:px-8 px-1 active:text-bezh">Blog</button></Link>
                <Link href="/"><button className="md:px-8 px-1 active:text-bezh">Contact</button></Link>
                
            </div>
            <div className="flex basis-1/4  text-end justify-end pr-8 pt-8">
            <div className="text-center">
                <Link href="/factor"><button className="text-end px-4"><TbShoppingCart className="md:size-6 size-4 text-sabz " /></button></Link>
                <Link href="/Login"><button className="text-end"><FaRegUser className="md:size-6 text-sabz size-4 " /></button></Link>
                </div>
            </div>
        </div>
    )
} 