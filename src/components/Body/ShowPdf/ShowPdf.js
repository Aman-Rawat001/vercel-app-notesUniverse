import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowPdf.css";
import firebase from "../../../firebase";

const ShowPdf = () => {
  const [showLink, setShowLink] = useState("");

  const db = firebase.firestore();
  let { pdfId } = useParams();
  const searchPdf = async () => {
    const response = db.collection("Notes_Data");
    const data = await response.get();
    data.docs.forEach((item) => {
      if (pdfId === item.id) {
        setShowLink(item.data().pdfLink);
        // console.log(item.data().pdfLink);
      }
    });
  };

  useEffect(() => {
    searchPdf();
  });
  return (
    <div className="mt-5 text-center">
      {/* <h1 className="pt-5">{pdfId}</h1> */}
      <div className="holds-the-iframe">
        <object
          className="mt-4"
          data={`${showLink}`}
          type="application/pdf"
          width="100%"
          height="600px"
        ></object>
      </div>
      <div className="showOnSmallScreen my-5 container">
        <div className="py-5 text-center">
          <p>
            <span style={{ fontWeight: "600" }}>Sorry! .</span>
            Your mobile browser doesn't support online PDF viewer.
            <span className="text_bold" style={{ fontWeight: "600" }}>
              {" "}
              Open in computer or
            </span>{" "}
          </p>
          <a href={`${showLink}`}>Download Notes PDF</a>
        </div>
      </div>
    </div>
  );
};

export default ShowPdf;
