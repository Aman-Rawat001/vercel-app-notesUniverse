import React from "react";
import "./SearchCard.css";
import img from "../../../../images/demoimage.jpeg";
const SearchCard = () => {
  return (
    <>
      <div className="searchCard my-2">
        <div className="card" style={{ maxWidth: "100%" }}>
          <img
            className="notes_image"
            src={img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <hr />
            <div
              className="card_content ps-1"
              style={{ backgroundColor: "#e6e6e6" }}
            >
              <p className="ch_name">Chapter Name</p>
              <p className="course">B.Tech cse 4-Sem . 2021</p>
              <p className="credit">
                Credit: <span>Aman Rawat</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
