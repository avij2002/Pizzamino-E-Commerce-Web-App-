import React, { useState } from "react";
import {Modal} from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
const Pizza = ({ pizzas }) => {
  const [quantity, setQunatity] = useState(1);
  const [varients, setVarients] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart(){
    dispatch(addToCart(pizzas,quantity,varients));
  }


  return (
    <div
      key={pizzas._id}
      className="shadow-lg p-3 mb-5 bg-body rounded"
    >

        <div onClick={handleShow}>
        <h1>{pizzas.name}</h1>
      <img
        className="img-fluid"
        src={pizzas.image}
        style={{ height: "200px", widows: "200px" }}
      />
        </div>
      

      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Varients</p>
          <select
            className="form-select"
            value={varients}
            onChange={(e) => {
              setVarients(e.target.value);
            }}
          >
            {pizzas.varients.map((varients) => {
              return <option value={varients}>{varients}</option>;
            })}
          </select>
        </div>

        <div className="m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => {
              setQunatity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, y) => {
              return <option value={y + 1}>{y + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price: {pizzas.prices[0][varients] * quantity} ₹
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>Add To Cart</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>M{pizzas.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img
        className="img-fluid ms-auto"
        src={pizzas.image}
        style={{ height: "200px", widows: "200px" }}
      />
      <p>{pizzas.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal >
    </div>
  );
};

export default Pizza;
