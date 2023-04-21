import React, { useState } from "react";
import productsJson from "./veggy.json";
import ListProducts from "./components/ListProducts/ListProducts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  const [products, setProducts] = useState(
    productsJson.map((val) => {
      return { ...val, quantity: 1 };
    })
  );
  const [resultSearch, setResultSearch] = useState(
    productsJson.map((val) => {
      return { ...val, quantity: 1 };
    })
  );
  const [cartProducts, setCartProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [productInfor, setProductInfor] = useState(null);

  return (
    <div className="App">
      <Header
        products={products}
        setResultSearch={(p) => setResultSearch(p)}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
      />
      <ListProducts
        products={products}
        resultSearch={resultSearch}
        setResultSearch={(p) => setResultSearch(p)}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
        setProductInfor={setProductInfor}
        setShowModal={setShowModal}
      />
      <Footer />
      {showModal && (
        <Modal setShowModal={setShowModal} productInfor={productInfor} />
      )}
    </div>
  );
}

export default App;
