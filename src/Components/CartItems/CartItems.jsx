import React, { useContext } from "react";
import { ShopContext } from "../../Context/shopcontext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "../CartItems/Cartitems.css";

const CartItems = () => {
    const { getTotalAmount, all_product, cartItems, removeToCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="format">
                <p>Products</p>
                <p>Title</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className="formatitems format">
                            <img src={e.image} alt={e.name} className="Icon" />
                            <p>{e.name}</p>
                            <button className="quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img
                                src={remove_icon}
                                onClick={() => removeToCart(e.id)}
                                alt="Remove"
                                className="removeicon"
                            />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="totalitem">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="totalitem">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="totalitem">
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>CheckOut</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
