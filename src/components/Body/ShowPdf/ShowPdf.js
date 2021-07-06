import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowPdf.css";
import firebase from "../../../firebase";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

const ShowPdf = () => {
  const [showLink, setShowLink] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
      {<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={showLink}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
      </div>
    </div>
  );
};

export default ShowPdf;
