import EmptyProduct from "./EmptyProduct/EmptyProduct";
import ProductItem from "./ProductItem/ProductItem";

const ListProducts = ({
  products,
  resultSearch,
  setResultSearch,
  setActiveBag,
  cartProducts,
  setCartProducts,
  subTotal,
  setSubTotal,
  setProductInfor,
  setShowModal,
}) => {
  return (
    <div className="flex justify-center w-full bg-bgGrey">
      <div className="max-w-5xl flex flex-1 justify-between items-center ">
        {resultSearch.length > 0 ? (
          <div className="flex flex-wrap mt-[102px] py-4">
            {resultSearch.map((val) => (
              <ProductItem
                key={val.id}
                val={val}
                products={products}
                resultSearch={resultSearch}
                setResultSearch={setResultSearch}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                subTotal={subTotal}
                setSubTotal={setSubTotal}
                setProductInfor={setProductInfor}
                setShowModal={setShowModal}
              />
            ))}
          </div>
        ) : (
          <EmptyProduct />
        )}
      </div>
    </div>
  );
};

export default ListProducts;
