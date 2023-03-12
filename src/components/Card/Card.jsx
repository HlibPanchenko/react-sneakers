import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ imageUrl, price, title, id, addSneakersToCart, onAddToFavorite, favorited = false }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const objOfCard = {
    imageUrl,
    price,
    title,
    id
  };

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onAddToFavorite(objOfCard)
    setIsFavorite(!isFavorite);
  };

 

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} uah</b>
        </div>
        <button className="button" onClick={() => addSneakersToCart(objOfCard)}>
          <img
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
