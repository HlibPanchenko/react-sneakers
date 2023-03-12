import React from "react";

const CartItem = ({ imageUrl, price, title, id, deleteSneakersFromCart }) => {
  
  return (
    <div className="cartItem d-flex align-center mb-20">
      <img
        className="mr-20"
        width={70}
        height={70}
        src={imageUrl}
        alt="sneakers"
      />
      <div className="mr-20">
        <p className="mb-5">{title}</p>
        <b>{price} uah</b>
      </div>
      <img onClick={()=>deleteSneakersFromCart(id)} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>
  );
};

export default CartItem;
