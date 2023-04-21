import React from "react";
import emptyCart from "../../../assets/images/empty-cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faRemove } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartProducts, setCartProducts, subTotal, setSubTotal }) => {
  const handleRemoveProduct = (id) => {
    const idx = cartProducts.findIndex((val) => val.id === +id);
    let cart = [...cartProducts];
    setSubTotal(subTotal - cart[idx].price * cart[idx].quantity);
    cart.splice(idx, 1);
    setCartProducts(cart);
  };
  return (
    <div className="absolute flex flex-col -right-4 top-4  w-[360px] h-[380px] bg-white text-center  shadow-shadowCart rounded-md">
      <ul className="h-80 overflow-y-auto">
        {cartProducts.length > 0 ? (
          cartProducts.map((val) => (
            <li
              key={val.id}
              className=" flex justify-between items-center w-full h-16 text-textGrey p-2"
            >
              <div className="h-full flex items-center">
                <div className="mr-4 h-full">
                  <img src={val.image} alt=""className="h-full"/>
                </div>
                <div className=" flex flex-col items-start">
                  <span className="text-start inline-block mb-1">{val.name}</span>
                  <span className="text-start inline-block mb-1">
                    <FontAwesomeIcon icon={faDollar} className="text-textGrey"/>
                    {val.price}
                  </span>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="mr-6 flex flex-col">
                  <div>
                    <span>{val.quantity}</span> Nos
                  </div>
                  <span className="inline-block mt-1 text-textGrey font-bold">
                  <FontAwesomeIcon icon={faDollar} className="text-textGrey"/>
                    {val.price * val.quantity}
                  </span>
                </div>
                <div
                  data-id={val.id}
                  onClick={() => handleRemoveProduct(val.id)}
                >
                 <FontAwesomeIcon icon={faRemove} className="text-textGrey cursor-pointer leading-6 hover:text-red-600"/>
                </div>
              </div>
            </li>
          ))
        ) : (
          <>
            <div className="my-8">
              <img src={emptyCart} alt="Ảnh giỏ hàng" className="inline-block w-[250px]" />
            </div>
            <h3 className="text-textGrey opacity-70">Your cart is empty!</h3>
          </>
        )}
      </ul>
      <button
        className="w-80 m-4 p-2 bg-bgCheckout text-white uppercase text-base"
        style={cartProducts.length > 0 ? { opacity: 1 } : { opacity: 0.3 }}
      >
        proceed to checkout
      </button>
    </div>
  );
};

export default Cart;
