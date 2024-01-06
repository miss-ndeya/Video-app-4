import React from "react";

const Card = ({src}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card">
        <img
          src={src}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">This is Clouad Break</h6>
          <p className="card-text" style={{fontSize: "12px"}}>
            <img
              src={src}
              className="img-fluid me-2 img-users rounded-circle"
              style={{ height: 30, width: 30 }}
              alt="..."
            />
            <span>Zion cloud</span>
            <span>17.4K Views</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
