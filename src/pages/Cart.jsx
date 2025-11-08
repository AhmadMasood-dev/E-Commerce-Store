import React from "react";
import { useCart } from "../context/CartContext";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const { items, totalQuantity, totalPrice } = cart;
  console.log(cart);
  //   return (
  //     <div>
  //       <h2>Shopping Cart</h2>
  //       <ul>
  //         {items.map((item) => (
  //           <li key={item.title}>
  //             <div>
  //               <div>
  //                 <img src={item.image} alt="" />
  //                 <p>{item.title}</p>
  //                 <span>-</span>
  //                 <p>{item.quantity}</p>
  //                 <span>+</span>
  //                 <p>{item.price}</p>
  //               </div>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  return (
    <div className="h-screen py-20 bg-gray-100 ">
      <h1 className="mb-10 text-4xl font-bold text-center">Cart Items</h1>
      <div className="justify-center h-full max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
        <div className="h-full overflow-scroll rounded-lg md:w-2/3 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="justify-between w-full h-32 p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start"
            >
              <img
                src={item.image}
                alt="product-image"
                className="object-contain rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h2>
                </div>
                <div className="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </button>
                    {/* <input className="w-8 h-8 text-xs text-center bg-white border outline-none" type="number" value="2" min="1" /> */}
                    {item.quantity}
                    <button className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{item.price} $</p>
                    <button className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500">
                      <RxCross2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3">
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Total Quantities</p>
            <p className="text-gray-700">{totalQuantity}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${totalPrice + 4.99} USD</p>
              <p className="text-sm text-gray-700">including TAX</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
