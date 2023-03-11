import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {

  const [showDrawer, setShowDrawer] = useState(false)
  const [addedGoods, setAddedGoods] = useState([])
  const [items, setItems] = useState([])

  useEffect(()=>{
    async function getData() {
      const response = await fetch('https://640c498794ce1239b0a960f7.mockapi.io/items')
      const data = await response.json()
      setItems(data)
    }

    getData()
  }, [])

  function onClickShowCart() {
    setShowDrawer(true)
  }

  function onClickCloseCart() {
    setShowDrawer(false)
  }

  // function addSneakersToCart(sneakers) {
  //   setAddedGoods([...addedGoods, sneakers])
  // }

  function addSneakersToCart(sneakers) {
    setAddedGoods(prev => [...prev, sneakers])
  }

  return (
    <div className="wrapper clear">
      {showDrawer && <Drawer addedGoods={addedGoods} onClickCloseCart={onClickCloseCart}/>}
      

      <Header onClickShowCart={onClickShowCart}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers d-flex">
          {items.map((item) => (
            <Card key={item.price} addSneakersToCart={addSneakersToCart} title={item.title} price={item.price} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
