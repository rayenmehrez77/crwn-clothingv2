import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductsContext } from "../../context/products.context";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        console.log(product);
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
