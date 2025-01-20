import Image from "next/image";
import Slider from "./components/Slider";
import NewArrival from "./components/NewArrival";
import SingleImage from "./components/SingleImage";
import ProductCategory from "./components/ProductCategory";

export default function Home() {
  const Products = [
    {
      id: 1,
      name: "Product 1",
      image: "/images/product/image-1.jpg",
      tag: "NEW",
      price: "$120.25",
      rating: 5,
    },
    {
      id: 2,
      name: "Product 2",
      image: "/images/product/image-2.jpg",
      tag: "SALE",
      price: "$120.25",
      rating: 5,
    },
    {
      id: 3,
      name: "Product 3",
      image: "/images/product/image-3.jpg",
      tag: "POPULAR",
      price: "$120.25",
      rating: 5,
    },
    {
      id: 4,
      name: "Product 4",
      image: "/images/product/image-4.jpg",
      tag: "NEW",
      price: "$120.25",
      rating: 5,
    },
    {
      id: 5,
      name: "Product 5",
      image: "/images/product/image.jpg",
      tag: "NEW",
      price: "$120.25",
      rating: 4,
    },
  ];
  return (
    <div>
      <Slider />
      <NewArrival title="NEW ARRIVAL" Products={Products} />

      <SingleImage />
      <NewArrival title="POPULAR" Products={Products} />
      <ProductCategory />
    </div>
  );
}
