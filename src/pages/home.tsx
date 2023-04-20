import React from "react";
import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import ProductCard from "../components/molecules/product-card";
import { useForm } from "react-hook-form";
import { Product } from "../types/product";

type Props = {};

const HomePage = (props: Props) => {
  const data: Product[] = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: 100,
      image: "https://picsum.photos/300/200",
      category: ["electronics", "mobiles"],
    },
    {
      id: 2,
      name: "Product 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: 200,
      image: "https://picsum.photos/300/200",
      category: ["electronics", "mobiles"],
    },
    {
      id: 3,
      name: "Product 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: 300,
      image: "https://picsum.photos/300/200",
      category: ["electronics", "mobiles"],
    },
    {
      id: 4,
      name: "Product 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price: 400,
      image: "https://picsum.photos/300/200",
      category: ["electronics", "mobiles"],
    },
  ];
  const { register, watch } = useForm();
  const [filteredData, setFilteredData] = React.useState(data);
  //   if (watch("search")) {
  //     if (watch("search").length === 0) {
  //       return;
  //     }
  //   }
  return (
    <div className="px-5">
      <input
        type="search"
        {...register("search")}
        placeholder="Search by product name"
        className="input input-bordered w-full max-w-full"
        onChange={(e) => {
          const fd = data.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          setFilteredData(fd);
        }}
      />
      <div className="flex flex-wrap justify-center">
        {[...filteredData].map((product) => {
          return (
            <ProductCard
              category={product.category}
              id={product.id}
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              rating={5}
            />
          );
        })}
        {filteredData.length === 0 && (
          <div className="text-center my-8">
            <h1 className="text-2xl">No products found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
