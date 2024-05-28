import React from "react";

const AppCard = ({ name, desc, link }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{desc}</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-primary btn-sm" href="#!">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
