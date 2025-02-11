'use client'
import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import Image from "next/image"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Slider(){
    const {limitedProducts}=useContext(ProductsContext)!;

    return(
        <div className="w-full mt-8">
            <div className="w-5/6  m-auto my-4">
           
           <div className="basis-1/2 text-end flex"> <Link href={'product'}><button className="font-mono md:text-xl flex text-end bg-sabz p-2 rounded-xl text-kerem   ">All Products <FaAngleRight className="size-6"/></button></Link></div>
            </div>

            <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            <div className="grid py-5">
                {limitedProducts.map((product)=>(
                    <SwiperSlide key={product.id} className="py-4">
                      <Link href={`product/${product.id}`}><div >
                     <Image src={product.thumbnail} alt={product.title} width={200} height={200}  />
                      <p className="text-center font-bold text-meshki my-2 md:text-lg text-sm">{product.title}</p>
                     <p className="text-center text-meshki mb-4 font-bold md:text-md text-xs"><strong>Price:</strong>${product.price}</p>
                    
                 </div></Link></SwiperSlide>
                ))}
                
            </div>
            </Swiper>
        </div>
    )
}


