import React from "react";

const Items = (props) => {
  return (
    <div className="col-md-3">
      <img src={props.image} className="img-responsive image" alt="" />
  <h4 className="text-center">{props.title}</h4>
      <div className="yellow-bar"></div>
      <h4 className="text-center">
  <small>${props.price}</small>
      </h4>
  <h5 className="text-center price">or {props.quantity}</h5>
      <button
        type="submit"
        className="btn btn-primary btn-block button"
        name="button"
      >
        Add to cart
      </button>
      <div className="shipping">
        <p className="pshipping">Free Shipping</p>
      </div>
    </div>
  );
};

export default Items;
