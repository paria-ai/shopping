'use client'
import Link from "next/link";
import img1 from "./../../../public/img/image1 (2).jpeg";
import Image from "next/image"
import { TbTruck } from "react-icons/tb";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineChangeCircle } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import img2 from "./../../../public/img/image2 (1).jpeg"
import Slider from "./../component/Slider";
import { useRef } from "react"
export default function HomePage(){
    const targetRef= useRef<HTMLDivElement>(null);
    const scrollToComponent=()=>{
        if(targetRef.current){
            targetRef.current.scrollIntoView({behavior:"smooth"});
        }
        };
    return(
        <div className="container  mt-4">
            <div  className="w-full my-10 text-meshki">
                <div className="flex flex-row w-5/6 justify-center">
                    <div className="basis-3/4 text-center item-center mr-5 mt-5">
                        <div className=" text-center pt-6">
                            <p className="md:text-5xl text-xl leading-[70px] p-4 font-bold font-mono">Multiply your<br/> beauty whit us.</p>
                            </div>
                        <div className="mt-3 ">
                            <Link href={"product"}><button className="w-1/4 py-2 bg-sabz text-bezh mx-4 rounded-xl  active:shadow-sm active:shadow-meshki hover:bg-bezh hover:text-meshki md:text-xl text-sm">Get Start</button></Link>
                            <button className="w-1/4 py-2 bg-sabz text-bezh mx-4 rounded-xl active:shadow-sm active:shadow-meshki hover:bg-bezh hover:text-meshki md:text-xl text-sm" onClick={scrollToComponent}>Learn More</button>
                        </div>
                    </div>
                    <div className="basis-1/4 text-center ml-4 ">
                    <Image src={img1} alt="Logo image" width={400} height={300} className="ml-5 rounded-full shadow-sm shadow-sabz" />
                    </div>
                </div>
            </div>
            <div className="w-full my-10 py-3 mt-16 text-meshki">
                <div className="flex w-5/6 m-auto justify-center bg-bezh py-3 rounded-full">
                    <div className="w-1/4 text-center justify-center py-5 text-kerem"> 
                    
                        <button><TbTruck className="size-9" /></button>
                    <p className="md:text-lg text-base">Free shopping </p>
                    
                    </div>
                    <div className="w-1/4 text-center justify-center py-5 text-kerem "> 
                    <button><LuCircleDollarSign className="size-9"/></button>
                    <p  className="md:text-lg text-base"> Guaratee</p>
                    </div>
                    <div className="w-1/4 text-center justify-center py-5 text-kerem"> 
                    <button><MdOutlineChangeCircle className="size-9"/></button>
                    <p className="md:text-lg text-base"> Hight quality </p>
                    </div>
                    <div className="w-1/4 text-center justify-center py-5 text-kerem"> 
                    <button><RiSecurePaymentLine className="size-9"/></button>
                    <p className="md:text-lg text-base">Safe and Secure </p>
                    </div>
                </div>
            </div>
            <div className="w-full py-10" ref={targetRef}>
                <div className="flex w-3/4 m-auto justify-center py-5">
                    <div className="w-1/2 bg-bezh items-center p-5 py-10 m-3 rounded-full text-meshki">
                        <p className="md:text-6xl text-xl items-center font-mono font-bold md:leading-[100px]">About Us</p>
                        <p className="md:text-xl text-sm font-bold md:leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim quasi illo obcaecati vero accusantium repellat pariatur, temporibus at. Velit ab corporis ducimus quas natus tempora accusamus similique iste repudiandae.</p>
                   
                    </div>
                    <div className="w-1/2  text-center justify-center ">
                    <Image src={img2} alt="Logo image" width={600} height={300 } className="rounded-xl "/>
                    </div>
                </div>
            </div>
            <div>
                <Slider/>
            </div>
            
        </div>
    )
} 