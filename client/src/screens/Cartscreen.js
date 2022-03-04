import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, deleteFromCart} from '../actions/cartActions';

function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const subTotal = cartItems.reduce((x,item)=>x+item.price,0);
  const dispatch = useDispatch();
  function al(){
    <div class="alert alert-dark" role="alert">
    This is a dark alert—check it out!
    </div>
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6"> 
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return <div className="flex-container">
              <div className="  text-left m-1 w-100">
                <h1>{item.name} [{item.varient}]</h1>
                <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                <h1 style={{display:"inline"}}>Quantity : </h1>
                <i className="fa fa-plus" style={{color:"green",margin:"5px"}} aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                <b>{item.quantity}</b>
                <i className="fa fa-minus" aria-hidden="true" style={{color:"red",margin:"5px"}} onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                <hr></hr>
              </div>
              <div className="m-1 w-100"> 
                <img src={item.image} style={{height:"80px",width:"80px"}}></img>
              </div>
              <div className="m-1 w-100 mt-5">
                <i className="fa fa-trash" style={{color:"red"}} onClick={()=>{dispatch(deleteFromCart(item))}}></i>
              </div>
              
            </div>;
          })}
        </div>
        <div className="col-md-2 text-right">
        <h2 style={{fontSize:"45px"}}>SubTotal : {subTotal}₹</h2>
        <button className="btn" oncClick={al}   type="button" data-toggle="modal" data-target="#exampleModalCenter">CheckOut</button>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Order Placed</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Your Order is Placed.<br/>You Please Proceed With The Payments
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Proceed</button>
      </div>
    </div>
  </div>
</div>
        </div>
        

      </div>
    </div>
  );
}

export default Cartscreen;
