import React from "react";
import "./SearchCard.css";
import img from "../../../../images/demoimage.jpeg";
const SearchCard = (props) => {
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
              style={{ backgroundColor: "rgb(218 229 246)" }}
            >
              <p>Notes no: {props.num}</p>
              <p className="ch_name">{props.chName}</p>
              <p className="course">B.Tech cse {props.semName} . 2021</p>
              <p className="credit">
                Uploded by: <span>{props.name}</span>
              </p>
              <a href={props.pdfLink}>Access Note</a>
              <p>fileName: {props.file_name}</p>
              <p>SubName: {props.subName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
