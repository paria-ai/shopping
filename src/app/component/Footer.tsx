'use client'
import Image from "next/image"
import img from "./../../../public/img/image0.png"
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
export default function Footer(){
    return(
        <div className=" w-full bg-bezh  mt-5">
            <div className="flex flex-row">
                <div className="basis-1/4 justify-center ">
                <div className="text-center">
           <Image src={img} alt="Logo image" width={150} height={100}/>
            </div>
                    <div className=" text-meshki pl-6 pb-5">
                        <button className="px-3 "><GrInstagram className="size-5 text-meshki hover:text-sabz"/></button>
                        <button  className="px-3"><BsTelegram className="size-5 text-meshki hover:text-sabz"/></button>
                        <button  className="px-3"><FaGoogle className="size-5 text-meshki hover:text-sabz"/></button>
                    </div>
                </div>
                <div className="basis-1/4 mt-8 md:leading-10 items-center">
                    <p className="md:text-xl text-base font-bold">Products</p>
                    <Link href={"/"}><p className=" hover:text-sabz hover:font-bold">beauty & personal</p></Link>
                    <Link href={"/"}><p className=" hover:text-sabz hover:font-bold">baby care & item</p></Link>
                </div>
                <div className="basis-1/4  mt-8 md:leading-10 items-center">
                    <p className="md:text-xl text-base font-bold">Company</p>
                    <Link href={"/"}><p className=" hover:text-sabz hover:font-bold">About Us</p></Link>
                    <Link href={"/"}><p className=" hover:text-sabz hover:font-bold">Terms & servise</p></Link>
                </div>
                <div className="basis-1/4 mt-8 md:leading-10 items-center">
                    <p className="md:text-xl text-base font-bold">Contact</p>
                    <p >+98 9356943000</p>
                    <p>Abediparia02@gmail.com</p>
                </div>
            </div>
        </div>
    )
} 

