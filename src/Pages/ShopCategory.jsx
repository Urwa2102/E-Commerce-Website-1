import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import "../Components/NewCollections/NewCollections.css";
import { ShopContext } from "../Context/shopcontext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import  "../Components/Item/Item.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product || all_product.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="shop-category">
      <img className="banner" src={props.banner} alt="Banner" />
      <div className="shopcategoryindexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className="categorysort">
        Sort by
        <img src={dropdown} alt="Sort dropdown" />
      </div>
      <div className="shopcategoryproducts">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">
         Explore More.
      </div>
    </div>
  );
};

export default ShopCategory;
