import React, { useContext } from "react";
import Rating from "../atoms/rating";
import CartContext, { CartContextType } from "../../context/cart/cart-context";
import { Product } from "../../types/product";

type Props = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string[];
};

const ProductCard = ({
  id,
  name,
  description,
  image,
  price,
  rating,
  category,
}: Props) => {
  const { addToCart, increase, decrease, cartItems } = useContext(
    CartContext as React.Context<CartContextType>
  );

  //Check whether the product is in the cart or not
  const isInCart = () => {
    console.log({ rr: !!cartItems.find((item) => item.id === id) });

    return !!cartItems.find((item) => item.id === id);
  };

  return (
    <div className="m-4 card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">
          <p>{name}</p>
          <div className="badge badge-secondary">Rs. {price}</div>
        </h2>

        <p>{description}</p>
        <div className="flex justify-between">
          <Rating rating={rating} />
          <div className="card-actions justify-between">
            {!isInCart() && (
              <button
                className="btn btn-ghost"
                onClick={() => {
                  if (isInCart()) {
                    increase({ name, description, image, price, id, category });
                  } else {
                    addToCart({
                      name,
                      description,
                      image,
                      price,
                      id,
                      category,
                    });
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            )}
            {isInCart() && (
              <button
                className="btn btn-ghost"
                onClick={() => {
                  increase({ name, description, image, price, id, category });
                }}
              >
                Add More
              </button>
            )}
            {/* <button className="btn btn-primary">Rs. {price} Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
