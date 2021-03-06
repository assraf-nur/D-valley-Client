import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://tranquil-shore-78244.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you really want to delete ?");
    if (proceed) {
      const url = `https://tranquil-shore-78244.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center mb-4">
        <h2 data-aos="fade-down" className="mb-1 ms-5 fw-bold">
          Manage Inventories
        </h2>
        <Link
          data-aos="fade-down"
          className="btn btn-dark fw-bold ms-auto me-5"
          to="/addProducts"
        >
          Add New Products
        </Link>
      </div>
      <div data-aos="fade-down-left" className="row container gap-5">
        {products.map((product) => (
          <Card className="mx-auto shadow" style={{ width: "18rem" }}>
            <Card.Img
              className="p-3 w-50 mx-auto"
              variant="top"
              src={product.img}
            />
            <Card.Body className="border rounded shadow-sm">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <span className="fw-bold">Supplier: {product.supplier}</span>{" "}
                <br /> <span>Quantity: {product.quantity}</span>
              </Card.Text>
            </Card.Body>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="btn btn-danger w-100 mt-2 mb-2"
            >
              Delete
            </button>
          </Card>
        ))}
        ;
      </div>
    </div>
  );
};

export default ManageInventories;
