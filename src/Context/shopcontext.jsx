import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";
import "../Components/Item/Item.css";

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState(all_product);

    useEffect(() => {
        // Assuming all_product is fetched or imported correctly here.
        console.log("Products:", products);  // Check if all_product is correctly loaded
    }, [products]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] ?? 0) + 1, // Default to 0 if undefined
        }));
    };

    const removeToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Avoid negative values
        }));
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const product = products.find((product) => product.id === Number(item));
                if (product) {
                    totalAmount += product.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    const getTotalCartItems = () => {
        let total = 0 ;
        for (const item in cartItems){
            if(cartItems[item]>0){
                total += cartItems[item];
            }
        }
        return total ;
    };

    const contextValue = { getTotalCartItems , getTotalAmount, all_product: products, cartItems, addToCart, removeToCart };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
