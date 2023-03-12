import React from "react";
import Card from "../components/Card/Card";
import { createContext, useContext } from "react";
import { AppContext } from "../App";




const Home = ({
  addSneakersToCart,
  onAddToFavorite,
  onChangeInput,
  controlInput,
  items,
  addedGoods,
  isLoading
}) => {

  
  const renderItems = () => {

    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(controlInput.toLowerCase()))
    return (isLoading ? [...Array(8)] : filtredItems)
      .map((item) => (
        <Card
        {...item}
          key={item && item.id}
          // id={item.id}
          addSneakersToCart={addSneakersToCart}
          // title={item.title}
          // price={item.price}
          // imageUrl={item.imageUrl}
          onAddToFavorite={onAddToFavorite}
          // added = {isItemAdded(item && item.id)} 
          isLoading={isLoading}         
        />
      ))
  }


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
       {renderItems()}
      </div>
    </div>
  );
};

export default Home;
