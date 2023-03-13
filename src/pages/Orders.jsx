import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/orders");
        console.log(data);
        setOrders(data);
      } catch (error) {
        alert("ошибка в добавлении заказа");
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <h1 className="mb-15">Мои заказы</h1>
      <div className="sneakers d-flex flex-column">
        {orders.map((item) => {
          return (
            <div className="orderCard">
              <h3 className="mb-15">Заказ №{item.id}</h3>
              <div className="cards d-flex flex-wrap">
                {(Loading ? [...Array(4)] : item.Order).map((card) => {
                  return (
                    <Card
                      key={card?.id}
                      id={card?.id}
                      title={card?.title}
                      price={card?.price}
                      imageUrl={card?.imageUrl}
                      isLoading={Loading}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
