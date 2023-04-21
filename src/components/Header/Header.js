import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/Veggy.png';
import bag from '../../assets/images/bag.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Cart from "./Cart/Cart.js";
const Header = ({
    products,
    setResultSearch,
    cartProducts,
    setCartProducts,
    subTotal,
    setSubTotal,
}) => {
    const [inpSearch, setInpSearch] = useState("");
    const [showCart, setShowCart] = useState(false);

    const handleSearchProduct = (e) => {
        setInpSearch(e.target.value);
        const inp = e.target.value.toLowerCase();
        const resultList = products.filter((val) => {
            return val.name.toLowerCase().includes(inp);
        });
        setResultSearch(resultList);
    };

    const cartRef = useRef(null);
    const bagRef = useRef(null);

    useEffect(() => {
        const handleCloseCart = (e) => {
            if (bagRef.current.contains(e.target)) {
                e.preventDefault();
                setShowCart(!showCart);
            } else if (!cartRef.current.contains(e.target) && showCart) {
                setShowCart(false);
            }
        };
        document.addEventListener("mousedown", handleCloseCart);
        return () => {
            document.removeEventListener("mousedown", handleCloseCart);
        };
    });
    return (
        <div className="flex justify-center shadow-shadowBottom fixed z-20 w-full top-0 bg-white">
            <div className="max-w-5xl flex flex-1 justify-between items-center p-8">
                <div className="w-32">
                    <img src={logo} alt="" />
                </div>
                <div className='w-1/2 !outline !outline-textGreen !outline-2 text-base rounded-md relative '>
                    <input type="text" className="w-full py-2 pl-3 pr-8"
                        placeholder="Search for Vegetables and Fruits"
                        value={inpSearch}
                        onChange={handleSearchProduct} />
                    <FontAwesomeIcon icon={faSearch} className=' text-textGreen absolute right-2 top-1/3' />
                </div>
                <div className=" w-1/6 flex justify-end items-center">
                    <nav className="text-textGreen text-sm font-medium text-right">
                        <ul className="">
                            <li>
                                <span>No. of items</span>
                                <span>: </span>
                                <span>{cartProducts.length}</span>
                            </li>
                            <li>
                                <span>Sub Total</span>
                                <span>: </span>
                                <span>{subTotal}</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="ml-3">
                        <a ref={bagRef} href="#">
                            <img
                                src={bag} alt="Giỏ hàng" />
                        </a>
                        <div ref={cartRef} className="relative">
                            {showCart && (
                                <Cart
                                    cartProducts={cartProducts}
                                    setCartProducts={setCartProducts}
                                    subTotal={subTotal}
                                    setSubTotal={setSubTotal} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;