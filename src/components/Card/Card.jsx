import React, { useState } from "react";
import styles from './Card.module.scss'

const Card = ({imageUrl, price, title, addSneakersToCart}) => {

  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus =() => {
    setIsAdded(!isAdded)
  }

  const objOfCard = {
    imageUrl,
    price,
    title
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} uah</b>
        </div>
        <button className="button" onClick={() => addSneakersToCart(objOfCard)}>
          <img onClick={onClickPlus}  src={isAdded ? "/img/btn-checked.svg": "/img/btn-plus.svg"} alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
