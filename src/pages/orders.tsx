import React from "react";

type Props = {};

const OrdersPage = (props: Props) => {
  return (
    <div className="px-4">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Order ID</th>
              <th>Delivery Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://i.imgur.com/3s7ADY0.png"
                  alt="product"
                  className="w-20 h-20"
                />
              </td>
              <td>123456</td>
              <td>12/12/2021</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://i.imgur.com/3s7ADY0.png"
                  alt="product"
                  className="w-20 h-20"
                />
              </td>
              <td>123456</td>
              <td>12/12/2021</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
