import React, { useEffect, useState } from "react";
import Inventories from "./Inventories";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mt-3">
      <h2 data-aos="fade-down" className="text-center mb-3 fw-bold"> Manage Inventories </h2>
      <div data-aos="fade-down-left" className="row container gap-5">
      {
      products.map((product) => (
              <Inventories key={product._id} product={product}></Inventories>
            ))};
      </div>
    </div>
  );
};

export default ManageInventories;
