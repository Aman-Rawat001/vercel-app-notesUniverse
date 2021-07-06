import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowPdf.css";
import firebase from "../../../firebase";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ShowPdf = () => {
  const [showLink, setShowLink] = useState("");
  const [numPages, setNumPages] = useState(null);

  const db = firebase.firestore();
  let { pdfId } = useParams();
  const searchPdf = async () => {
    const response = db.collection("Notes_Data");
    const data = await response.get();
    data.docs.forEach((item) => {
      if (pdfId === item.id) {
        setShowLink(item.data().pdfLink);
      }
    });
  };

  useEffect(() => {
    searchPdf();
  });
  // prevent pdf from right click.
  window.oncontextmenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-5 text-center">
      <div style={{ marginTop: "5rem" }}>
      <hr className="w-50 mx-auto"/>
        <Document
          id="showDocument"
          className="documentDiv"
          file={showLink}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Page
                size="A4"
                style={{ backgroundColor: "tomato" }}
                pageNumber={page}
              />
            ))}
        </Document>
      </div>
      <hr className="w-50 mx-auto"/>
      <div className="showOnSmallScreen mt-2">
        <p>Your mobile browser is not compatible to show pdf, <span style={{fontWeight: "bold"}}>open in your computer to access the notes.</span></p>
      </div>
    </div>
  );
};

export default ShowPdf;
