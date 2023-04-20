import React, { useContext } from "react";
import CartContext from "../context/cart/cart-context";
import Checkout from "../components/molecules/checkout";
import { useNavigate } from "react-router-dom";

type Props = {};

const CartPage = (props: Props) => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-1 px-4 py-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Cart</h1>
          <div className="flex items-center gap-4">
            <p>Total Rs. {cartContext?.total}</p>
            <button
              className="btn btn-secondary"
              onClick={() => cartContext?.clearCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <ul role="list" className="my-6 divide-y divide-gray-200">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quanity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartContext?.cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-ghost"
                        onClick={() => {
                          cartContext?.decrease(item);
                        }}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-ghost"
                        onClick={() => cartContext?.increase(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-ghost"
                        onClick={() => cartContext?.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ul>

        <div className="mt-6 flex justify-end">
          <a
            onClick={() => {
              navigate("/checkout");
            }}
            className="btn btn-primary"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
