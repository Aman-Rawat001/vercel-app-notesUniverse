import React, { useState, Suspense, lazy } from "react";
import "./SearchNotes.css";
// import SearchCard from "./SearchCard/SearchCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchCard = lazy(() => import("./SearchCard/SearchCard.js"));

import firebase from "../../../firebase";

const SearchNotes = () => {
  const db = firebase.firestore();
  const [fetchedSem, setFetchedSem] = useState("");
  const [fetchNotes, setFetchNotes] = useState([]);
  document.getElementById("nothingFound").style.display = "none";

  const handleNotesSearch = () => {
    const e = document.getElementById("selectSem");
    var selectedSem = e.options[e.selectedIndex].text;
    setFetchedSem(selectedSem);
  };

  const usersArray = [];
  const handleSearch = async (e) => {
    e.preventDefault();
    // removing before screen.
    document.getElementById("beforeScreen").style.display = "none";

    // getting data from firebase database.
    const response = db.collection("Notes_Data");
    const filter = await response.where("semester", "==", fetchedSem);
    const data = await filter.get();
    data.docs.forEach((item) => {
      var tempUsers = {
        id: item.id,
        pdfLink: item.data().pdfLink,
        name: item.data().name,
        chapter: item.data().chapter,
        semester: item.data().semester,
        subject: item.data().subject,
        fileName: item.data().file_name,
      };
      usersArray.push(tempUsers);
    });
    console.log(usersArray);
    if (usersArray.length === 0) {
      document.getElementById("nothingFound").style.display = "block";
    } else {
      document.getElementById("nothingFound").style.display = "none";
      setFetchNotes(usersArray);
    }
  };

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
                value={""}
                placeholder="Select fields below..."
                aria-label="Search"
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-success searchBar_btn"
                style={{ backgroundColor: "rgb(41 98 184)", color: "white" }}
                type="submit"
              >
                Search
              </button>
            </form>
            {/* dropdowns */}
            <div className="dropdown_menu row">
              <div className="dropdown col-md-3 col-sm-6 col-6 search_dropdown">
                <select
                  name="subject"
                  id="select_sub"
                  className="form-select select_dropdown"
                  aria-label="Default select example"
                >
                  <option selected>Institution</option>
                  <option value="1">Graphic era university</option>
                </select>
              </div>
              <div className="dropdown col-md-3 col-sm-6 col-6 search_dropdown">
                <select
                  name="subject"
                  id="select_sub"
                  className="form-select select_dropdown"
                  aria-label="Default select example"
                >
                  <option selected>Course</option>
                  <option value="1">B.tech c.s.e</option>
                </select>
              </div>
              <div className="dropdown col-md-3 col-sm-6 col-6 search_dropdown">
                <select
                  onChange={handleNotesSearch}
                  name="semester"
                  id="selectSem"
                  className="form-select select_dropdown"
                  aria-label="Default select example"
                >
                  <option selected>Semester</option>
                  <option value="1">Semester-1</option>
                  <option value="2">Semester-2</option>
                  <option value="3">Semester-3</option>
                  <option value="4">Semester-4</option>
                  <option value="5">Semester-5</option>
                  <option value="6">Semester-6</option>
                  <option value="7">Semester-7</option>
                  <option value="8">Semester-8</option>
                </select>
              </div>
              <div className="dropdown col-md-3 col-sm-6 col-6 search_dropdown">
                <select
                  name="subject"
                  id="select_sub"
                  className="form-select select_dropdown"
                  aria-label="Default select example"
                >
                  <option selected>Subject</option>
                  <option value="1">
                    Fundamentals of computer programming
                  </option>
                  <option value="2">Data Structures</option>
                  <option value="3">Discrete mathematics</option>
                  <option value="4">Database management system</option>
                  <option value="5">Theory of computation</option>
                  <option value="6">Java programming</option>
                  <option value="7">Artificial intelligence(AI)</option>
                  <option value="8">Internet of things(IOT)</option>
                  <option value="9">Cyber security</option>
                  <option value="10">Compiler Design</option>
                  <option value="11">
                    Microprocessors and Micrcontrollers
                  </option>
                </select>
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
                {/* before screen */}
                <div id="beforeScreen">
                  <p>Select all the fields and press search button.</p>
                </div>

                {/* nothing found */}
                <div id="nothingFound">
                  <p>Nothing Found</p>
                  <p>Try again by selecting different parameters.</p>
                </div>

                {/* data from firebase */}
                <Suspense fallback={<div>Searching...</div>}>
                  {fetchNotes.map((user, index) => {
                    return (
                      <div className="col-md-4 col-sm-6 col-12 search_card_box">
                        <SearchCard
                          num={index + 1}
                          chName={user.chapter}
                          semName={user.semester}
                          subName={user.subject}
                          name={user.name}
                          pdfLink={user.pdfLink}
                          file_name={user.fileName}
                        />
                      </div>
                    );
                  })}
                </Suspense>
              </div>
              {/* RHS Stuff */}
              <div className="col-md-2 col-sm-12 col-12 leftCorner">
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
