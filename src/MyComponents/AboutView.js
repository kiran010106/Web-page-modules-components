import React from "react";
import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="about" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">hey there what r u</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutView;
