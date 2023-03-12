import React from "react";
import {Link} from "react-router-dom";
const Header = ({ onClickShowCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p">
          <img
            onClick={onClickShowCart}
            width={18}
            height={18}
            src="/img/cart.svg"
            alt=""
          />
          <span>1205 uah</span>
        </li>
        <Link to="/favorites">
        <li className="mr-20 cu-p">
          <img width={18} height={18} src="/img/heart.svg" alt="favorites" />
        </li>
        </Link>
        <li>
          <img width={18} height={18} src="/img/user.png" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
