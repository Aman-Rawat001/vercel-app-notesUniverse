import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../images/tempLogo.svg";

const Navbar = () => {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "1px 10px";
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "10px 10px";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }

  const history = useHistory();
  //non optimized code.
  useEffect(() => {
    const activeLink = window.location.pathname;
    if (activeLink === "/") {
      document.getElementById("linkOne").classList.add("clickActive");
      document.getElementById("linkTwo").classList.remove("clickActive");
      document.getElementById("linkThree").classList.remove("clickActive");
      document.getElementById("linkFour").classList.remove("clickActive");
    } else if (activeLink === "/search_notes") {
      document.getElementById("linkTwo").classList.add("clickActive");
      document.getElementById("linkOne").classList.remove("clickActive");
      document.getElementById("linkThree").classList.remove("clickActive");
      document.getElementById("linkFour").classList.remove("clickActive");
    } else if (activeLink === "/upload_notes") {
      document.getElementById("linkThree").classList.add("clickActive");
      document.getElementById("linkOne").classList.remove("clickActive");
      document.getElementById("linkTwo").classList.remove("clickActive");
      document.getElementById("linkFour").classList.remove("clickActive");
    } else if (activeLink === "/contact") {
      document.getElementById("linkFour").classList.add("clickActive");
      document.getElementById("linkOne").classList.remove("clickActive");
      document.getElementById("linkThree").classList.remove("clickActive");
      document.getElementById("linkTwo").classList.remove("clickActive");
    }
  }, []);
  const handleClick = (num) => {
    if (num === "1") {
      document.getElementById("linkOne").classList.add("clickActive");
      document.getElementById("linkTwo").classList.remove("clickActive");
      document.getElementById("linkThree").classList.remove("clickActive");
      document.getElementById("linkFour").classList.remove("clickActive");
    } else if (num === "2") {
      document.getElementById("linkTwo").classList.add("clickActive");
      document.getElementById("linkOne").classList.remove("clickActive");
      document.getElementById("linkThree").classList.remove("clickActive");
      document.getElementById("linkFour").classList.remove("clickActive");
    } else if (num === "3") {
      document.getElementById("linkThree").classList.add("clickActive");
      document.getElementById("linkOne").classList.remove("clickActive");
      document.getElementById("linkTwo").classList.remove("clickActive");
      document.getElementById("linkFour").classList.remove("clickActive");
    } else if (num === "4") {
      document.getElementById("linkFour").classList.add("clickActive");
      document.getElementById("linkOne").classList.remove("clickActive");
      document.getElementById("linkThree").classList.remove("clickActive");
      document.getElementById("linkTwo").classList.remove("clickActive");
    }
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light navigationBar"
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href="#">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className="logo" src={logo} alt="Logo" />
              <h5 className="">NOTES_UNIVERSE</h5>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar_menu me-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="listmydiv">
              <NavLink className="navbar_link" aria-current="page" to="/">
                <li
                  className="navbar_item"
                  id="linkOne"
                  onClick={() => handleClick("1")}
                >
                  Home
                </li>
              </NavLink>
              <NavLink className="navbar_link" to="/search_notes">
                <li
                  className="navbar_item"
                  id="linkTwo"
                  onClick={() => handleClick("2")}
                >
                  Search Notes
                </li>
              </NavLink>
              <NavLink className="navbar_link" to="/upload_notes">
                <li
                  className="navbar_item"
                  id="linkThree"
                  onClick={() => handleClick("3")}
                >
                  Upload Notes
                </li>
              </NavLink>
              <NavLink className="navbar_link" to="/contact">
                <li
                  className="navbar_item"
                  id="linkFour"
                  onClick={() => handleClick("4")}
                >
                  Contact Admin
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
