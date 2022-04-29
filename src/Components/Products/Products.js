import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mt-3 text-center">
      <h2> OUR PRODUCTS </h2>
      <CardGroup className="mt-3 row gap-5">
         {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
      </CardGroup>
    </div>
  );
};

export default Products;
