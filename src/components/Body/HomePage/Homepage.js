import React from "react";
import "./Homepage.css";
import backgroundWall from "../../../images/backgroundWall.png";
import sectionImg1 from "../../../images/sectionImg1.svg";
import socialMedia from "../../../images/socialMedia.svg";

const Homepage = () => {
  return (
    <div className="container-fluid homepage" style={{ marginTop: "4rem" }}>
      <div className="heroScreen row">
        <img src={backgroundWall} alt="Image" />
        <div className="col-md-6 leftColumn">
          <div className="mx-auto">
            <h6 className="mb-4">GET MATERIAL FOR YOUR COUSRE</h6>
            <h1 className="display-6">
              Get high quality varified notes from your school, professional
              course or university.
            </h1>
            <button className="btn btn-outline-success mt-4 heroScreen_btn">
              Search Notes
            </button>
          </div>
        </div>
        <div className="col-md-6 rightColumn">
          <div className="mx-auto">
            <h6 className="mb-4">UPLOAD NOTES AND COLURSE MATERIAL</h6>
            <h1 className="display-6">
              Upload quality notes from your school, professional course or
              university.
            </h1>
            <button className="btn btn-outline-success mt-4 heroScreen_btn">
              Upload Notes
            </button>
          </div>
        </div>
      </div>
      <section className="section-1 pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 leftContent">
              <img src={sectionImg1} alt="Image" />
            </div>
            <div className="col-md-6">
              <p>lorem23 sdfgh aesdrfgh sredtfgh sredtfg resdtfgh.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid section1_block2">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-6">
                <p>lorem23 sdfgh aesdrfgh sredtfgh sredtfg resdtfgh.</p>
              </div>
              <div className="col-md-6 leftContent">
                <img src={socialMedia} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid section-2">
          <div className="row">
            <div className="col-md-6 leftBox">
              <div className="my-5 py-4 mx-auto">
                <h5>Start Improving your grades</h5>
                <p>
                  Search through thousands of high quality grades notes and
                  start imporving your grades of school, professional courser
                  and colleges today.
                </p>
                <button className="btn btn-outline-success">Learn More</button>
              </div>
            </div>
            <div className="col-md-6 rightBox">
              <div className="my-5 py-4 ms-5">
                <h5>Start Improving your grades</h5>
                <p>
                  Search through thousands of high quality grades notes and
                  start imporving your grades of school, professional courser
                  and colleges today.
                </p>
                <button className="btn btn-outline-success">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
