import React from "react";
import Card from "../components/Card/Card";
const Favorites = ({ favorites, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <h1>Мои закладки</h1>
      <div className="sneakers d-flex">
        {favorites.map((item) => (
          <Card
            key={item.price}
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
