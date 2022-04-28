import React from "react";
import Common from "./Common";
import web from "../public/images/logo2.jpg";

function About() {
  return (
    <>
      <Common
        name="Welcome to EPC TechSpace for "
        imgsrc={web}
        visit="/contact"
        btname="Get in Touch"
      />
    </>
  );
}

export default About;
