import React from "react";
import Link from 'next/link'
import Image from 'next/image'
function Common({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h3>
                    {name}
                    <strong className="brand-name"> IT SOLUTIONS. </strong>
                  </h3>

                  <h2 className="my-3">
                    We're a team of talented developers that can help your
                    business grow!
                  </h2>

                  <div className="mt-3">
                    <Link href={visit} className="btn-get-started">
                      {btname}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <Image
                    src={imgsrc}
                    className="img-fluid animated m-5"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
