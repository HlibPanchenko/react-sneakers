import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{" "}
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.png"
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 uah</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.png"
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 uah</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
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
