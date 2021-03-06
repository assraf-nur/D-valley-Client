import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddProducts = () => {
  const [user] = useAuthState(auth);
  const userEmail = user.email;
  const handleAddProducts = (e) => {
    e.preventDefault();

    const email = userEmail;
    const name = e.target.name.value;
    const img = e.target.img.value;
    const price = e.target.price.value;
    const des = e.target.des.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;

    const products = { email, name, img, price, supplier, quantity, des };

    fetch("https://tranquil-shore-78244.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };

  return (
    <Form
      onSubmit={handleAddProducts}
      className="w-50 mt-5 p-4 mx-auto border rounded-2xl shadow"
    >
      <h2 className="text-center font-bold">Add Products</h2>
      <p className="text-center bg-dark text-light rounded-2xl">
        Products are stored in
        <span className="text-light fw-bold"> <br />{user.displayName} <br /></span> account
      </p>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" name="name" placeholder="Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Control type="text" name="img" placeholder="Image URL" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Control type="number" name="price" placeholder="Price" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSupplier">
        <Form.Control
          type="text"
          name="supplier"
          placeholder="Supplier"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control
          type="text"
          name="des"
          placeholder="Description"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Control
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
        />
      </Form.Group>

      <Button className="mx-auto w-100 px-5" variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProducts;
