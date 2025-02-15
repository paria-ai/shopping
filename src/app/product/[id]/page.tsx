import { notFound } from "next/navigation";
import Image from "next/image"
import Add from "@/app/component/Add";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  brand:string;
    warrantyInformation:string;
    shippingInformation:string;
}
interface PageProps{
  params:{
    id:string;
  };
}


async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) return null;
    return (await res.json()) as Product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id);

  if (!product) return notFound(); 

  return (
    <div className="container m-auto flex flex-row">
     <div className="basis-1/2 text-center">
      <Image src={product.thumbnail} alt={product.title} width={500} height={200}/></div>
      <div className="basis-1/2 md:mr-1 mr-3 ">
       <p className="md:text-5xl text-xl font-bold font-mono mb-9">{product.title}</p>
      <p className="md:text-sm text-xs py-3 my-4">{product.description}</p>
      <p className="md:text-3xl text-xl font-bold my-4">{product.price} $</p>
      <div className="flex flex-row my-4  ">
        <p className="text-start basis-1/2 font-mono text-sm md:text-base">Brand</p>
      <p className="text-end basis-1/2 font-bold text-sm md:text-base">{product.brand}</p></div>
                    <div className="flex flex-row my-4 ">
                      <p  className="text-start basis-1/2 font-mono text-sm md:text-base">WarrantyInformation</p>
                      <p className="text-end basis-1/2 font-bold  text-sm md:text-base">{product.warrantyInformation}</p></div>
                    <div className="flex flex-row my-4 ">
                      <p className="text-start basis-1/2 font-mono text-sm md:text-base">ShippingInformation</p>
                      <p className="text-end basis-1/2 font-bold text-sm md:text-base">{product.shippingInformation}</p></div>
      <Add product={product}/>
      </div>
    </div>
  );
}
