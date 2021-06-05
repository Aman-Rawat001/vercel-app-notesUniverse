import React from "react";
import "./Homepage.css";
import backgroundWall from "../../../images/backgroundWall.png";
import sectionImg1 from "../../../images/sectionImg1.svg";
import socialMedia from "../../../images/socialMedia.svg";
import easyTransfer from "../../../images/easyTransfer.svg";
import learning from "../../../images/learning.svg";
import quickLearning from "../../../images/quickLearning.svg";
import worldWide from "../../../images/worldWide.svg";

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
            <div className="col-md-6 leftContent ">
              <img src={sectionImg1} alt="Image" />
            </div>
            <div className="col-md-6 contentWrite my-auto">
              <h3 className="pb-2">Easy Quick And Relible</h3>
              <p>
                With Stuvia you buy the best study material for the best prices.
                Save time studying and download documents from our top sellers
                who have read your textbook, taken your class, or received a
                degree in your field before you. Or upload your documents to
                Stuvia and start earning money with every document sold
              </p>
              <button className="btn btn-success mt-2">Learn More</button>
            </div>
          </div>
        </div>
        <div className="container-fluid section1_block2">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-6  contentWrite my-auto">
                <h3 className="pb-2">Share your knowledge</h3>
                <p>
                  Hundred thousands of people are searching for your content
                  every day. You can easily upload your summaries to our
                  platform and start earning money from your study notes. Your
                  knowledge is worth money! Over 700,000 top sellers have
                  already joined and are making money from their knowledge
                  daily. Sign up for free today and start earning while helping
                  others!
                </p>
                <button className="btn btn-success mt-2">Learn More</button>
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
            <div className="col-md-6 leftBox ">
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
                <h5>Start benefiting today</h5>
                <p>
                  Sell your notes on the world’s #1 marketplace for students
                  notes & course materials and start earning money from the work
                  you’ve already done today.
                </p>
                <button className="btn btn-outline-success">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 contentBox">
              <img src={easyTransfer} alt="easytransfer" />
              <div>
                <h3>Easy uploading</h3>
                <p>
                  Create a sellers account in under a minute, set the price for
                  your documents and start uploading!
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contentBox">
              <img src={learning} alt="learning" />
              <div>
                <h3>Share knowledge</h3>
                <p>
                  Did you write textbook summaries or notes? Sell your study
                  documents on Stuvia and earn money with your knowledge!
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contentBox">
              <img src={worldWide} alt="worldWide" />
              <div>
                <h3>Worldwide reach</h3>
                <p>
                  Ten thousands of people are searching for notes on Stuvia
                  every day. Including yours! Some documents even sell hundreds
                  of times.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contentBox">
              <img src={quickLearning} alt="quickLearning" />
              <div>
                <h3>Quick earnings</h3>
                <p>
                  You earn money from each document you sell. This money will be
                  added to your account instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
