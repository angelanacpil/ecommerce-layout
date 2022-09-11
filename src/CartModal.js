import ReactDom from "react-dom";
import React, { useState } from "react";

const CartModal = ({ open, onClose, data }) => {
  if (!open) return null;

  const dummyData = [
    {
      name: "headphones",
      price: "20",
      quantity: "1",
      total: "20",
    },
    {
      name: "mouse",
      price: "20",
      quantity: "2",
      total: "40",
    },
  ];

  return ReactDom.createPortal(
    <>
      {/* Set this to 0.7 opacity rgba */}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black">
        <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="text-center fixed p-16 bg-white"
        >
          <button
            style={{
              top: "10%",
              right: "10%",
            }}
            className="absolute"
            onClick={onClose}
          >
            Close
          </button>

          <h1>Cart</h1>

          {/* Table */}
          {/* Table Theme */}
          <table className="my-6 table-auto">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            {/* Map Data */}
            <tbody>
              {dummyData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.total}</td>
                      <button>-</button>
                      <button>+</button>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <hr />

          <div className="flex justify-end gap-5">
            <p>60</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>,

    document.getElementById("portal")
  );
};

export default CartModal;
