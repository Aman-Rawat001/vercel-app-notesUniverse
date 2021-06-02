import React from "react";
import "./SearchNotes.css";
import SearchCard from "./SearchCard/SearchCard.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchNotes = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(230 228 228 / 73%)" }}
      >
        <div className="notes_searchBar container">
          <div className="">
            {/* //SearchBar */}
            <form className="d-flex my-4">
              <div className="faSearchIcon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                style={{
                  backgroundColor: "white",
                  outline: "none",
                  borderLeft: "none",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
                className="form-control me-2"
                type="search"
                placeholder="Search notes and course guides"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success searchBar_btn"
                style={{ backgroundColor: "green", color: "white" }}
                type="submit"
              >
                Search
              </button>
            </form>
            {/* dropdowns */}
            <div className="dropdown_menu row">
              <div className="dropdown col-md-3 col-sm-6 col-12 search_dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Institution
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Graphic Era University
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown col-md-3 col-sm-6 col-12 search_dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Course
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      B.Tech c.s.e
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown col-md-3 col-sm-6 col-12 search_dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Semester
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Semester-1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-4
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-5
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-6
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-7
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Semester-8
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </div>
              <div className="dropdown col-md-3 col-sm-6 col-12 search_dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Subject
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Fundamentals of computer programming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Structures
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Discrete mathematics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Database management system
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Theory of computation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Java programming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Artificial intelligence(AI)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Internet of things(IOT)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cyber security
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Compiler Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Microprocessors and Micrcontrollers
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-5" />

            {/* search result container */}
            <div className="row">
              <div
                className="row col-md-10 col-sm-12 col-12 paper_row"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  margin: "0",
                  marginBottom: "1rem",
                }}
              >
                <div className="col-md-4 col-sm-6 col-12 search_card_box">
                  <SearchCard />
                </div>
                <div className="col-md-4 col-sm-6 col-12 search_card_box">
                  <SearchCard />
                </div>
                <div className="col-md-4 col-sm-6 col-12 search_card_box">
                  <SearchCard />
                </div>
                <div className="col-md-4 col-sm-6 col-12 search_card_box">
                  <SearchCard />
                </div>
                <div className="col-md-4 col-sm-6 col-12 search_card_box">
                  <SearchCard />
                </div>
                <div className="col-md-4 col-sm-6 col-12 search_card_box">
                  <SearchCard />
                </div>
              </div>
              {/* RHS Stuff */}
              <div className="col-md-2 col-sm-12 col-12">
                <div className="card ">
                  <div className="card-header rhs_card_header">
                    Top Institutes
                  </div>
                  <div className="card-body">
                    <blockquote className="mb-0">
                      <p>
                        A well-known quote, contained in a blockquote element.
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card my-2">
                  <div className="card-header rhs_card_header">Top Area</div>
                  <div className="card-body">
                    <blockquote className=" mb-0">
                      <p>
                        A well-known quote, contained in a blockquote element.
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchNotes;
