import React from "react";
import Card from "../components/Card/Card";
import { createContext, useContext } from "react";
import { AppContext } from "../App";
const Favorites = ({ favorites, onAddToFavorite }) => {

  const context = useContext(AppContext)
  console.log(context);
  return (
    <div className="content p-40">
      <h1>Мои закладки</h1>
      <div className="sneakers d-flex">
        {context.favorites.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            onAddToFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
