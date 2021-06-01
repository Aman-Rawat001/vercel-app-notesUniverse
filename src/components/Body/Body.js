import React from "react";
import "./Body.css";

//importing components.
// import SearchNotes from "./SearchNotes/SearchNotes.js";
import UploadNotes from "./UploadNotes/UploadNotes.js";

const Body = () => {
  return (
    <>
      {/* <SearchNotes /> */}
      <UploadNotes />
    </>
  );
};

export default Body;
