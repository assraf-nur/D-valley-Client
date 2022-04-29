import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="w-100" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
