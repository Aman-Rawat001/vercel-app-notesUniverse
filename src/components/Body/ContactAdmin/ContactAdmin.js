import React, { useState } from "react";
import "./ContactAdmin.css";
import socialMediaImg from "../../../images/socialMedia.svg";
import firebase from "../../../firebase";

const ContactAdmin = () => {
  const db = firebase.firestore();
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    college: "",
    question: "",
  });
  let contactName, contactValue;
  const handleInputChange = (e) => {
    e.preventDefault();
    contactName = e.target.name;
    contactValue = e.target.value;
    setContactDetails({ ...contactDetails, [contactName]: contactValue });
  };
  const sendDetails = (e) => {
    e.preventDefault();
    if (
      !contactDetails.name ||
      !contactDetails.email ||
      !contactDetails.college ||
      !contactDetails.question
    ) {
      alert("Please fill all the fields");
    } else {
      console.log(contactDetails);
      db.collection("Student_Queries")
        .add({
          name: contactDetails.name,
          email: contactDetails.email,
          college: contactDetails.college,
          question: contactDetails.question,
        })
        .then(() => {
          alert("Your Query has been successfully deliverd");
          console.log("submitted");
        })
        .catch((err) => {
          console.log("submittion error: " + err);
          alert(err);
        });
    }
  };

  return (
    <div>
      <section className="contactAdmin mb-5">
        <div className="container">
          <div className="text-center py-5">
            <h1 style={{ fontWeight: "700" }}>HAVE SOME QUESTIONS?</h1>
            <p>
              Feel free to ask any kind or question related to your queiry. I
              would like to here you.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 rightBox">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 mx-auto ">
                    <form>
                      <div className="mb-3">
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          onChange={handleInputChange}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="college"
                          className="form-control"
                          placeholder="Your College"
                          aria-describedby="emailHelp"
                        />
                      </div>

                      <div className="mb-3">
                        <textarea
                          onChange={handleInputChange}
                          name="question"
                          className="form-control"
                          placeholder="Your Question..."
                          rows="3"
                        ></textarea>
                      </div>

                      <button
                        onClick={sendDetails}
                        // type="submit"
                        className="btn btn-primary sendmsg"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 leftBox">
              <img
                className="contactAdminSVG"
                src={socialMediaImg}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAdmin;
