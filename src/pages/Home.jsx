import React from "react";
import Card from "../components/Card/Card";
const Home = ({
  addSneakersToCart,
  onAddToFavorite,
  onChangeInput,
  controlInput,
  items,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {controlInput
            ? `поиск по запросу: "${controlInput}"...`
            : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input
            value={controlInput}
            onChange={onChangeInput}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="sneakers d-flex">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(controlInput.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.price}
              id={item.id}
              addSneakersToCart={addSneakersToCart}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
