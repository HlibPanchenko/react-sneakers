import { AppContext } from "../App";
import { useContext } from "react";
export const useCart = () => {
  const { addedGoods, setAddedGoods } = useContext(AppContext);
  const totalPrice = addedGoods.reduce((sum, item) => sum + item.price, 0);

  return [addedGoods, setAddedGoods, totalPrice];
};
