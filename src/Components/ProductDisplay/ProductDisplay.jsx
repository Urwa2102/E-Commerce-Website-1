import React , {useContext} from "react";
import "../ProductDisplay/Productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/shopcontext'; // Correct relative path



const ProductDisplay = ({product}) => {
    
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="left">
        <div className="imglist">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
         
        </div>  
        <div className="mainimage">
          <img className="mainimg" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={star_icon} alt="Star icon" />
          <img src={star_icon} alt="Star icon" />
          <img src={star_icon} alt="Star icon" />
          <img src={star_icon} alt="Star icon" />
          <img src={star_dull_icon} alt="Star dull icon" />
          <p>(122)</p>
        </div>
        <div className="productprices">
            <div className="oldprice">
              ${product.old_price}
            </div>
            <div className="newprice">
                ${product.new_price}
            </div>
            
             
        </div>
        <div className="productdescription">
            Stay warm and stylish with our classic men's sweater, designed to provide both comfort and durability. 
        
        </div>
        <div className="size">
            <h1>Select Size</h1>
            <div className="displaysizes">
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div>X-large</div>
                <div>XX-Large</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductDisplay;
