import React from "react";

const Navbar = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="col-md-3">
          <p className="heading">16 Product(s) found.</p>
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-3 order">
          <p className="heading">Order by</p>
          <p className="heading">
            {" "}
            <select name="select" id="">
              <option value="Select">Select</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
