import React from "react";

const Header = () => {
  return (
    <div className="head">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7 col-md-8 text-start text-center text-white text-main">
            <h4 className="text-capitalize">
              <div className="animate-charcter" id="word"></div>
            </h4>
            <div className="text-capitalize lh-sm">
              <span className="fs-1" style={{ color: "#c2255c" }}>
                Front-end{" "}
              </span>
              <span className="fs-2">developer based in India</span>
            </div>
            <p className="text-capitalize" style={{ color: "gray" }}>
              Simple & unique design.
            </p>
            <div className="button">
              <button type="button" className="btn btn-primary text-white">
                <a
                  href="./front-end.pdf"
                  className="text-decoration-none text-white"
                  download
                >
                  Resume
                </a>
              </button>
              <button type="button" className="btn btn-outline-warning">
                <a href="/" className="text-decoration-none text-white">
                  Hire Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
