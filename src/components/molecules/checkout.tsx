import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import CartContext from "../../context/cart/cart-context";
import { useNavigate } from "react-router-dom";

type Props = {};

const Checkout = (props: Props) => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          cartContext?.handleCheckout();
          navigate("/order-success");
        })}
      >
        <div className="border rounded-md p-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="form-control  w-3/6">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered "
              {...register("address")}
            />
          </div>
          <div className="form-control  w-3/6">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered"
              {...register("city")}
            />
          </div>
          <div className="form-control w-3/6">
            <label className="label">
              <span className="label-text">State</span>
            </label>
            <input
              type="text"
              placeholder="State"
              className="input input-bordered"
              {...register("state")}
            />
          </div>
          <div className="form-control w-3/6">
            <label className="label">
              <span className="label-text">Zip</span>
            </label>
            <input
              type="text"
              placeholder="Zip"
              className="input input-bordered"
              {...register("zip")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered"
              {...register("country")}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Number</span>
          </label>
          <input
            type="text"
            placeholder="Card Number"
            className="input input-bordered"
            {...register("cardNumber")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Expiry</span>
          </label>
          <input
            type="text"
            placeholder="Card Expiry"
            className="input input-bordered"
            {...register("cardExpiry")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card CVC</span>
          </label>
          <input
            type="text"
            placeholder="Card CVC"
            className="input input-bordered"
            {...register("cardCVC")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Name</span>
          </label>
          <input
            type="text"
            placeholder="Card Name"
            className="input input-bordered"
            {...register("cardName")}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
