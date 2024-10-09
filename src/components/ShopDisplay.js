import React, { useState, useEffect } from "react";
import Shop from "../data/shop.json"



const ShopDisplay = () => {
  const [shopItems, setShopItems] = useState([]);
  useEffect(() => {
    setShopItems(Shop);
  }, []);
    return (
        <div className="product-grid">
          {shopItems.map((item, index) => (
            <div key={index} className="product-item">
              <a rel="noreferrer" target="_blank" href={item.link}>
                <img src={item.image} alt={item.alt} />
                <h1>{item.title}</h1>
                <div className="price">
                  <span>{item.price}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
    );
  }

export default ShopDisplay;
