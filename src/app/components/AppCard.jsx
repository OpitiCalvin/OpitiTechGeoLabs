import React from "react";
import Image from "next/image";

const AppCard = ({ name, desc, link, imgSrc }) => {
  const validImageSrc = imgSrc
    ? imgSrc
    : "https://dummyimage.com/900x400/dee2e6/6c757d.jpg";
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <Image
          src={validImageSrc}
          alt="dummy image"
          className="card-img-top"
          width={250}
          height={200}
        />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{desc}</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-primary btn-sm" href={link} target="_blank">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
