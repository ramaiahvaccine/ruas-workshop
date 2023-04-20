import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

type Props = {};

const OrderSuccessPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Confetti />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-8 rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500 mx-auto mb-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.152 7.464a.75.75 0 0 1 1.156.984l-5 6a.75.75 0 0 1-1.157 0l-2.5-3a.75.75 0 0 1 1.156-.984l1.824 2.189 4.418-5.189z"
            />
          </svg>
          <h2 className="text-xl font-bold mb-4 text-center">
            Order Confirmed!
          </h2>
          <p className="text-gray-600 text-center">
            Your order has been confirmed and is being processed. You will
            receive a confirmation email shortly.
          </p>
          <button
            className="btn btn-secondary w-full mt-6"
            onClick={() => {
              navigate("/");
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
