import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";
import { createContext, useContext } from "react";

const Card = ({
  imageUrl,
  price,
  title,
  id,
  addSneakersToCart,
  onAddToFavorite,
  favorited = false,
  // added = false,
  isLoading,
}) => {
  const {isItemAdded} = useContext(AppContext)
  // console.log(title, isItemAdded(id));
  // const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const objOfCard = {
    imageUrl,
    price,
    title,
    id,
  };

  const onClickPlus = () => {
    // setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onAddToFavorite(objOfCard);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="164" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="185" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="24" />
          <rect x="116" y="230" rx="20" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              onClick={onClickFavorite}
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="unliked"
            />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} uah</b>
            </div>
            {addSneakersToCart && <button
              className="button"
              onClick={() => addSneakersToCart(objOfCard)}
            >
              <img
                onClick={onClickPlus}
                src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="Plus"
              />
            </button>}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
