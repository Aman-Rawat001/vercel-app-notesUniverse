import React from "react";
import "./SearchCard.css";
import img from "../../../../images/notesImage.png";
const SearchCard = (props) => {
  return (
    <>
      <div className="searchCard my-2">
        <div className="card" style={{ maxWidth: "100%" }}>
          <img
            className="notes_image"
            id="noteImg"
            src={img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <hr />
            <div
              className="card_content ps-1"
              style={{ backgroundColor: "rgb(218 229 246)" }}
            >
              <p>Note no: {props.num}</p>
              <p className="ch_name">{props.chName}</p>
              <p className="course">B.Tech cse {props.semName} . 2021</p>
              <p className="credit">
                Uploded by: <span>{props.name}</span>
              </p>
              <p>fileName: {props.file_name}</p>
              <p>SubName: {props.subName}</p>
              <a href={props.pdfLink} target="_blank">
                <button className="accessBtn btn btn-success">
                  Access Note
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
