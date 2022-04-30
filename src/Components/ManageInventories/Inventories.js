import React from 'react';
import { Card } from 'react-bootstrap';

const Inventories = ({product}) => {
    const {_id, name, img, quantity, supplier } = product;

    const handleDeleteProduct  = ({id, e}) =>{
      const proceed = window.confirm("Are you really want to delete ?");
      if(proceed){
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
           
        })
      }
    }

    return (
        <Card className="mx-auto shadow" style={{ width: '18rem' }}>
        <Card.Img className="p-3 w-50 mx-auto" variant="top" src={img} />
        <Card.Body className="border rounded shadow-sm">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
         <span className="fw-bold">Supplier: {supplier}</span> <br /> <span>Quantity: {quantity}</span>
          </Card.Text>
        </Card.Body>
        <button onClick={()=> handleDeleteProduct(_id)} className="btn btn-danger w-100 mt-2 mb-2">Delete</button>
      </Card>
    );
};

export default Inventories;