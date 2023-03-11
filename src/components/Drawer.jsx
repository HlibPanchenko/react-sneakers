import React from "react";
import CartItem from "./CartItem";

const Drawer = ({onClickCloseCart, addedGoods}) => {
  return (
    <div style={{ display: "block" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{" "}
          <img onClick={onClickCloseCart} className="cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h2>
        <div className="items">
          {addedGoods.map(good =>  <CartItem {...good}/>)}
         
          
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>21 489 uah</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 uah</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
