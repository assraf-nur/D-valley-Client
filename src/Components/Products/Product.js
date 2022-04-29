import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, price, img, des, quantity, supplier } = product;
  return (
    <Card className="mx-auto shadow" style={{ width: '18rem' }}>
      <Card.Img className="p-3 w-75 mx-auto" variant="top" src={img} />
      <Card.Body className="border rounded shadow-sm">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {des} <br /> <span className="fw-bold">Price: {price}$</span> <br /> <span className="fw-bold">Supplier: {supplier}</span> <br /> <span>Quantity: {quantity}</span>
        </Card.Text>
      </Card.Body>
        <button className="btn btn-primary w-100 mt-2 mb-2">UPDATE</button>
    </Card>
  );
};

export default Product;
