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

  return (
    <div className="mt-5 text-center">
      <div style={{ marginTop: "10rem" }}>
        <Document
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
    </div>
  );
};

export default ShowPdf;
