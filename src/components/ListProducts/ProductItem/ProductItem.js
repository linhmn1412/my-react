import { faDollar, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const ProductItem = ({
  val,
  products,
  setResultSearch,
  resultSearch,
  cartProducts,
  setCartProducts,
  subTotal,
  setSubTotal,
  setProductInfor,
  setShowModal,
}) => {
  const [quantity, setQuantity] = useState(val.quantity);
  const [checkAdd, setCheckAdd] = useState(false);

  const handleIncrease = (id) => {
    setQuantity(+quantity + 1);
    const idx = resultSearch.findIndex((val) => val.id === +id);
    let tmp = [...resultSearch];
    tmp[idx].quantity = +quantity + 1;
    setResultSearch(tmp);
  };

  const handleDecrease = (id) => {
    if (quantity > 1) {
      setQuantity(+quantity - 1);
      const idx = resultSearch.findIndex((val) => val.id === +id);
      let tmp = [...resultSearch];
      tmp[idx].quantity = +quantity - 1;
      setResultSearch(tmp);
    }
  };
  const handleInputQuantity = (e) => {
    if(e.target.value) setQuantity(e.target.value)
   
  };
   
  const handleAddToCart = (id) => {
    setCheckAdd(true);
    const pd = products.find((val) => val.id === +id);
    const idx = cartProducts.findIndex((val) => val.id === pd.id);
    const num = +quantity;
    let cart = [...cartProducts];
    if (idx === -1) {
      cart.push({ ...pd, quantity: num });
      setSubTotal(subTotal + pd.price * num);
    } else {
      cart[idx].quantity += num;
      setSubTotal(subTotal + cart[idx].price * num);
    }
    setCartProducts(cart);
  };
 
  useEffect(() => {
    if (checkAdd) {
      setTimeout(() => {
        setCheckAdd(false);
      }, 2000);
    }
  });
  return (
    <div className="w-1/4  p-4 ">
      <div className="text-center bg-white p-2 hover:shadow-shadowProduct" data-id={val.id}>
        <div
          className="overflow-hidden  "
          onClick={() => {
            setProductInfor(val);
            setShowModal(true);
          }}
        >
          <img src={val.image} alt={`Sản phẩm val.id`} className="transition duration-200 cursor-zoom-in hover:scale-110"/>
        </div>
        <span className=" block text-textGrey font-normal mb-2">{val.name}</span>
        <span className="block text-textGrey font-medium mb-4">
          <FontAwesomeIcon icon={faDollar}/>
          {val.price}
        </span>
        <div className="flex justify-center items-center my-4">
          <button  onClick={() => handleDecrease(val.id)}>
            <FontAwesomeIcon icon={faMinus} className="border-[1px] border-gray-400 p-1 rounded-full"/>
          </button>
          <input
            className="!outline !outline-gray-400 !outline-[1px] w-12 mx-2 text-center  "
            value={quantity}
            onChange={handleInputQuantity}
            type="number"
            min = '1'
          />
          <button onClick={() => handleIncrease(val.id)}>
            < FontAwesomeIcon icon={faPlus} className="border-[1px] border-gray-400 p-1 rounded-full"/>
          </button>
        </div>
        <div className="mb-4">
          <button
            className=" w-10/12 p-2 rounded-sm text-center bg-textGreen font-normal cursor-pointer text-white"
            onClick={() => handleAddToCart(val.id)}
            style={
              checkAdd
                ? { backgroundColor: "#fc7710" }
                : { backgroundColor: "#077915" }
            }
          >
            {checkAdd ? "✔ ADDED" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
