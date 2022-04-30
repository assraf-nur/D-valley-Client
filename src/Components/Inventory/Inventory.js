import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="container mt-2">
        <h2 className="text-center">Inventory</h2>
            <div className="card shadow rounded mb-3 mt-2">
            <div className="row g-1">
                 <div className="col-md-3">
                <img className="w-100" src={product.img} alt="" />
            </div>
            <div className="col-md-9">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Configuration: <span className="fw-bold">{product.des}</span> <br /> Product ID: 
                <span className="fw-bold"> {product._id}</span> <br /> Price: <span className="fw-bold"> {product.price}$</span> <br /> Quantity: <span className="fw-bold">{product.quantity} Unit</span> <br /> Supplier: <span className="fw-bold">{product.supplier}</span> <br /> Status: <span>....</span>
                </p>
            </div>
            </div>
            <button className="btn btn-success w-50 mx-auto mb-3">Delivered</button>
        </div>
        </div>

        <div>
            <h3> <span className="text-danger">Restock</span> {product.name}</h3>
            <form className="border w-50 p-4 rounded shadow" action="">
                <input className="border p-1 px-5" type="number" name="restock" placeholder="How much you want to add"/>
                <input className="btn btn-primary ms-2" type="submit" value="Add Product" />
                <div className="fw-bold">
                    Current Quantity: {product.quantity}
                </div>
            </form>
        </div>
    </div>
  );
};

export default Inventory;
