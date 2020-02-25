import React from "react";

const Sizes = () => {
  return (
    <div>
      <h3>Sizes:</h3>
      <div className="row">
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">XS</div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">S</div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">M</div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">ML</div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">L</div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">XL</div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div className="sizes text-center text">XXL</div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <br />
      <p className="text-center price">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Sizes;
