import React from "react";
import "./Home.css";

function Home() {
  // Defining the structure and content of the Home component.
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <div className="col-lg-10 mx-auto">
          <p className="intro lead mb-4">
            I'm Constanza Hinojosa, a designer based in London.
          </p>
          <p className="aboutMe col-lg-8 mx-auto">
            ...with a background in retail and a passion for creativity and
            organization. Currently studying Front-End Web Development, I'm
            always seeking new challenges to push my boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
