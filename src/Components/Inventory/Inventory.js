import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const url = `https://tranquil-shore-78244.herokuapp.com/products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuantity(data.quantity));
  }, [id]);


  useEffect(() => {
    const url = `https://tranquil-shore-78244.herokuapp.com/products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleQuantity = (e) => {
    e.preventDefault();
    const currentQuantity = parseFloat(e.target.quantity.value) + parseFloat(product.quantity);
    alert(e.target.quantity.value + ` Added in the store, If product quantity does not update please try again.`);

    const quantity = currentQuantity;

    const updateProduct = { quantity };

    const url = `https://tranquil-shore-78244.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.updateCount > 0) {
          const remaining = product.filter((product) => product._id !== id);
          setQuantity(remaining);
        }
        console.log('success', data);
        e.target.reset();
        window.location.reload()
      });
  };

  const handleDelivery = (e) => {
    e.preventDefault();
    alert("One product delivered. If product quantity does not update please try again.");

    const currentQuantity2 = parseFloat(product.quantity) - 1;

    const quantity = currentQuantity2;
    const updateProduct = { quantity };

    const url = `https://tranquil-shore-78244.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.updateCount > 0) {
          const remaining = product.filter((product) => product._id !== id);
          setQuantity(remaining);
        }
        console.log('success', data);
        window.location.reload()
      });
  };


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
              <p className="card-text">
                Configuration: <span className="fw-bold">{product.des}</span>{" "}
                <br /> Product ID:
                <span className="fw-bold"> {product._id}</span> <br /> Price:{" "}
                <span className="fw-bold"> {product.price}$</span> <br />{" "}
                Quantity:{" "}
                <span className="fw-bold">
                  {quantity <= 0 ? (
                    <>Get product</>
                  ) : (
                    <>{quantity} </>
                  )}{" "}
                  Unit
                </span>{" "}
                <br /> Supplier:{" "}
                <span className="fw-bold">{product.supplier}</span> <br />{" "}
                Status:{" "}
                <span>
                  {" "}
                  {quantity <= 0 ? (
                    <>Out of stock</>
                  ) : (
                    <>{quantity} Unit in the stock</>
                  )}{" "}
                </span>
              </p>
            </div>
          </div>
          <form className="d-flex" onSubmit={handleDelivery} action="">
            <input
              className="w-50 btn btn-success mx-auto mb-3"
              type="submit"
              value="Delivered"
            />
          </form>
        </div>
      </div>

      <div className="d-flex">
        <form
          onSubmit={handleQuantity}
          className="border w-50 p-4 rounded shadow"
          action=""
        >
          <h3>
            {" "}
            <span className="text-danger">Restock</span> {product.name}
          </h3>
          <input
            className="border p-1 px-5"
            type="number"
            name="quantity"
            placeholder="How much you want to add"
          />

          <input
            className="btn btn-primary ms-2"
            type="submit"
            value="Add Product"
          />

          <div className="fw-bold">
            Current Quantity:{" "}
            {product.quantity <= 0 ? (
              <>Out of stock</>
            ) : (
              <>{product.quantity} Unit in the stock</>
            )}
          </div>
        </form>

        <div className="mx-auto rounded border mb-3 p-4 shadow">
          <h3>Manage All Inventories</h3>
          <Link to="/manageInventory">
            <button className="btn mt-4 btn-dark">Manage Inventories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
