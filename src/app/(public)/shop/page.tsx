import { ProductCard, type Product } from "@/components/ProductCard";
import { API_URL } from "@/constants";

export default async function ShopPage() {
  const res = await fetch(API_URL,{cache:'no-store'});
  const products: Product[] = await res.json();
  return (
    <div className=" grid grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
