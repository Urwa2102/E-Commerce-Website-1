import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/shopcontext'; // Import the context
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/Relatedproduct";



const Product = () => {
  const { productId } = useParams(); // Correctly extracted productId from the URL
  const { all_product } = useContext(ShopContext);
  const product = all_product.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not found
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />

    </div>
  );
};

export default Product;
