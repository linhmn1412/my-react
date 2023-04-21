import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const Modal = ({ setShowModal, productInfor }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!modalRef.current.contains(e.target)) setShowModal(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center z-30 w-full h-full bg-bgModal">
      <div className="bg-white rounded-[4px]" ref={modalRef}>
        <div className=" inline-block relative w-[500px] h-[500px]">
          <button className="absolute right-0 top-0 text-2xl px-4 hover:bg-[#b9b0b0]" onClick={() => setShowModal(false)}>
            ×
          </button>
          <img src={productInfor.image} alt="Ảnh sản phẩm" className="rounded-tr-md rounded-tl-md" />
        </div>
        <div className="flex justify-between bg-[#f1f1f1] rounded-br-md rounded-bl-md p-6">
          <div >{productInfor.name}</div>
          <div className="text-textGreen">
            <FontAwesomeIcon icon={faDog}/>
            {productInfor.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
