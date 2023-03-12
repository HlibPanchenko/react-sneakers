import { useEffect, useState } from "react";
import axios from "axios";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import {   BrowserRouter as Router,   Route,   Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { createContext, useContext } from "react";

export const AppContext = createContext({})

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [addedGoods, setAddedGoods] = useState([]);
  const [items, setItems] = useState([]);
  const [controlInput, setControlInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  function onChangeInput(e) {
    setControlInput(e.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get("http://localhost:4000/cart");
      const favoritesResponse = await axios.get(
        "http://localhost:4000/favorites"
      );
      const itemsResponse = await axios.get(" http://localhost:4000/items");

      setIsLoading(false)
      
      setFavorites(favoritesResponse.data);
      setAddedGoods(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  function onClickShowCart() {
    setShowDrawer(true);
  }

  function onClickCloseCart() {
    setShowDrawer(false);
  }

  // function addSneakersToCart(sneakers) {
  //   setAddedGoods([...addedGoods, sneakers])
  // }

  function addSneakersToCart(sneakers) {
    try {
      if (addedGoods.find((el) => el.id === sneakers.id)) {
        console.log("kotiki");
        axios.delete(`http://localhost:4000/cart/${sneakers.id}`);
        setAddedGoods((prev) => prev.filter((item) => item.id !== sneakers.id));
      } else {
        // axios.post("https://640c498794ce1239b0a960f7.mockapi.io/cart", sneakers);
        axios.post("http://localhost:4000/cart", sneakers);
        setAddedGoods((prev) => [...prev, sneakers]);
      }
    } catch (error) {
      alert("Ошибка добавления товара в корзину");
    }
  }

  function deleteSneakersFromCart(id) {
    // axios.delete(`https://640c498794ce1239b0a960f7.mockapi.io/cart/${id}`);
    axios.delete(`http://localhost:4000/cart/${id}`);
    setAddedGoods((prev) => prev.filter((item) => item.id !== id));
  }

  async function onAddToFavorite(sneakers) {
    try {
      // axios.post("https://640c498794ce1239b0a960f7.mockapi.io/cart", sneakers);
      if (favorites.find((favorite) => favorite.id == sneakers.id)) {
        axios.delete(`http://localhost:4000/favorites/${sneakers.id}`);
        // setFavorites((prev) => prev.filter((item) => item.id !== sneakers.id)); // визуально удалять не будем, вдруг пользователь случайно нажал
      } else {
        // из response вытащили data
        const { data } = await axios.post(
          "http://localhost:4000/favorites",
          sneakers
        );
        console.log(data); // объект кроссовка
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("не удалось добавить в фавориты");
    }
  }

  const isItemAdded = (id) => {
    return addedGoods.some((obj)=>obj.id==id)
  }

  return (
    <AppContext.Provider value={{items, addedGoods, favorites, isItemAdded, setShowDrawer, setAddedGoods}}>
    <Router>
      <div className="wrapper clear">
        {showDrawer && (
          <Drawer
            addedGoods={addedGoods}
            onClickCloseCart={onClickCloseCart}
            deleteSneakersFromCart={deleteSneakersFromCart}
          />
        )}

        <Header onClickShowCart={onClickShowCart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addSneakersToCart={addSneakersToCart}
                items={items}
                controlInput={controlInput}
                onAddToFavorite={onAddToFavorite}
                onChangeInput={onChangeInput}
                addedGoods={addedGoods}
                isLoading={isLoading}
                
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                // favorites={favorites}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
