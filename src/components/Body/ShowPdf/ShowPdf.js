import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowPdf.css";
import firebase from "../../../firebase";

const ShowPdf = () => {
  const [showLink, setShowLink] = useState("");
  const [loading, setLoading] = useState(true);

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
  }, []);
  useEffect(() => {
    setLoading(!loading);
  }, [showLink]);

  return (
    <>
      <div className="mt-5 text-end container">
        <div
          className="transparentDivWhole"
          onContextMenu={(e) => e.preventDefault()}
        ></div>
        {loading ? (
          <div style={{ marginTop: "5rem" }}>
            <hr className="w-50 mx-auto" />
            <p
              className="text-end font-weight-bold"
              style={{
                backgroundColor: "yellow",
                display: "inline",
              }}
            >
              Scroll using scroller only.👇
            </p>
            <object
              data={`${showLink}#toolbar=0`}
              type="application/pdf"
              width="100%"
              height="700px"
            >
              <p>
                Your web browser doesn't have a PDF plugin. Instead{" "}
                <span style={{ fontWeight: "500" }}>
                  {" "}
                  Open in Computer or laptop.
                </span>
              </p>
            </object>

            <hr className="w-50 mx-auto" />
            <div
              className="transparentDiv"
              id="disableRightClick"
              onContextMenu={(e) => e.preventDefault()}
            ></div>
            <div
              className="transparentDivLeft"
              id="disableRightClick"
              onContextMenu={(e) => e.preventDefault()}
            ></div>
          </div>
        ) : (
          <div className="mt-5 text-center">
            <p className="pt-5">loading your pdf...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowPdf;
