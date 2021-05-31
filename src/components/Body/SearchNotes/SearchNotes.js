import React from "react";
import "./SearchNotes.css";
import SearchCard from "./SearchCard/SearchCard.js";

const SearchNotes = () => {
  return (
    <>
      <div className="notes_searchBar container">
        <div className="">
          {/* //SearchBar */}
          <form className="d-flex my-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search notes"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* dropdowns */}
          <div className="dropdown_menu row">
            <div className="dropdown col-md-4">
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
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown col-md-4">
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
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown col-md-4">
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
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mb-2" />

          {/* search result container */}
          <div className="row">
            <div
              className="row col-md-10 col-sm-12 col-12 paper_row"
              style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}
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
            <div className="col-md-2 col-sm-12 col-12 ms-3">
              <div className="card ">
                <div className="card-header">Quote</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
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
                <div className="card-header">Quote</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
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
    </>
  );
};

export default SearchNotes;
