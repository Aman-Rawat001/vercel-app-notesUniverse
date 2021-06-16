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
      <h1 className="pt-5">{pdfId}</h1>
      <div className="holds-the-iframe">
        {/* <embed
          src={`${showLink}#toolbar=0`}
          typa="application/pdf"
          width="100%"
          height="600px"
          loading="lazy"
        /> */}
      </div>
    </div>
  );
};

export default ShowPdf;
