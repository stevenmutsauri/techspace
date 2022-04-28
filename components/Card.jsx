import React from "react";
import Link from 'next/link'
import Image from 'next/image'

function Card({ title, imgsrc ,info}) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <Image src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text  ">
              {info}
            </p>
            <a href="/contact" className="btn btn-danger ">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
