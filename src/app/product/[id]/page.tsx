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


async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) return notFound(); 

  return (
    <div className="container m-auto flex flex-row">
     <div className="basis-1/2 text-center">
      <Image src={product.thumbnail} alt={product.title} width={500} height={200}/></div>
      <div className="basis-1/2 ">
       <p className="text-5xl font-bold font-mono mb-9">{product.title}</p>
      <p className="text-sm py-3 my-4">{product.description}</p>
      <p className="text-3xl font-bold my-4">{product.price} $</p>
      <div className="flex flex-row my-4  ">
        <p className="text-start basis-1/2 font-mono">Brand</p>
      <p className="text-end basis-1/2 font-bold">{product.brand}</p></div>
                    <div className="flex flex-row my-4 ">
                      <p  className="text-start basis-1/2 font-mono">WarrantyInformation</p>
                      <p className="text-end basis-1/2 font-bold">{product.warrantyInformation}</p></div>
                    <div className="flex flex-row my-4 ">
                      <p className="text-start basis-1/2 font-mono">ShippingInformation</p>
                      <p className="text-end basis-1/2 font-bold">{product.shippingInformation}</p></div>
      <Add product={product}/>
      </div>
    </div>
  );
}