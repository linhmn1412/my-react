import React from "react";
import noSearch from "../../../assets/images/nosearch.png";

const EmptyProduct = () => {
  return (
    <div className="mt-[102px] w-full text-center">
      <div className=" w-full flex justify-center py-16">
        <img src={noSearch} alt="" className="opacity-40 w-80" />
      </div>
      <h2 className="text-textGrey text-xl font-bold py-5">Sorry, no products matched your search!</h2>
      <h4 className="opacity-30 text-md pb-5">Enter a different keyword and try.</h4>
    </div>
  );
};

export default EmptyProduct;
