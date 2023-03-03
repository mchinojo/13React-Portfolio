import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1549396274-2e8c29758e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          ></img>
        </div>
        <div className="col-lg-6">
          <p className="display-5 fw-bold lh-1 mb-3">
            Welcome to my portfolio website. I'm a designer based in London,
            with a background in retail and a passion for creativity and
            organization. Currently studying Front-End Web Development, I'm
            always seeking new challenges to push my boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
