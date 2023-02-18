import React from "react";
import { MenuList } from "../helpers/MenuList";

const Menu = () => {
  return (
    <div className="menuPage">
      <h1 className="menuTitle">OUR MENU</h1>
      <div className="menuList">
        {MenuList.map((item, index) => {
          return (
            <div key={index} className="menuItem">
              <img
              
                src={item.image}
                alt=""
              />
              <h3>{item.name}</h3>
              <p>{item.price} TL</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
