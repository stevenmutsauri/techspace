import React from "react";

function onClickButton(event) {
  event.preventDefault();
}

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us🤝 </h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form
             action="https://formspree.io/f/xnqlljkn"
             method = "POST"
             >
              <div className="form-group">
                <label for="exampleFormControlInput1">Enter Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Contact Number</label>
                <input
                  type="text"
                  name="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter number"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  name= "email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="email"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Type your Message Here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3 ">
                <button
                  className="btn btn-outline-primary mb-3 items-center"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
