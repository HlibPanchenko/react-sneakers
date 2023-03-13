import React, { useState } from "react";
import axios from "axios";
import CartItem from "../CartItem";
import Info from "../Info";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useCart } from "../../hooks/useCart";
import styles from './Drawer.module.scss'


const Drawer = ({ onClickCloseCart, deleteSneakersFromCart, opened }) => {
  const [addedGoods, setAddedGoods, totalPrice] = useCart()
  // const { addedGoods, setAddedGoods } = useContext(AppContext);
  const [orderID, setOrderID] = useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  // const totalPrice = addedGoods.reduce((sum, item)=>sum + item.price,0)

  // отключим скролл у бади когда корзина открыта
  if(opened) {
    document.body.classList.add('removeScroll')
  } else {
    document.body.classList.remove('removeScroll')
  }

  const onclickOrder =  async () => {
   try {
    const {data} = await axios.post("http://localhost:4000/orders", {Order: addedGoods});
    console.log(data.id);
    setOrderID(data.id)
    setIsOrderCompleted(true);
    setAddedGoods([]); // очищаем корзину когда уже отправили заказ на БД
    addedGoods.forEach(element => {
      axios.delete("http://localhost:4000/cart/" + element.id);
    });
   } catch (error) {
    alert('ошибка в заказе')
   }
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={onClickCloseCart}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        {addedGoods.length > 0 ? (
          <>
            <div className="items flex">
              {addedGoods.map((good) => (
                <CartItem
                  {...good}
                  key={good.id}
                  deleteSneakersFromCart={deleteSneakersFromCart}
                />
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} uah </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice / 20} uah </b>
                </li>
              </ul>
              <button onClick={onclickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            desсription={isOrderCompleted ? `Ваш заказ №${orderID}!` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isOrderCompleted ? "/img/complete-order.svg" : "/img/box.svg"}
          />
          
        )}
        
      </div>
    </div>
  );
};

export default Drawer;
