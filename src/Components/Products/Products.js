import React, { useEffect, useState } from "react";
import Product from "./Product";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://tranquil-shore-78244.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mt-3">
      <h2 data-aos="fade-down" className="text-center mb-3 fw-bold">
        {" "}
        OUR PRODUCTS{" "}
      </h2>
      <div data-aos="fade-down-left" className="row container gap-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
