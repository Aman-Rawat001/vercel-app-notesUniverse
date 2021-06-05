import React from "react";
import "./Footer.css";
import tempLogo from "../../../images/tempLogo.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="leftContent d-flex">
              <img src={tempLogo} alt="Logo" />
              <h3>NOTES_UNIVERSE</h3>
              <button className="btn btn-success ms-4">Connect Admin</button>
            </div>
            <p className="mt-5">© 2021 Notes Universe. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <div className="rightContent">
              <p>More From Notes Universe</p>
              <div className="d-flex">
                <div>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Search Notes</p>
                  <p>Upload Notes</p>
                </div>
                <div className="ps-4 mobileMargin">
                    <p>Career</p>
                    <p>Privacy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="ps-4 mobileMargin">
                    <p>Endrosments</p>
                    <p>Contact Admin</p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
