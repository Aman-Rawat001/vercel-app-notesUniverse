import React from "react";
import "./ContactAdmin.css";
import socialMediaImg from "../../../images/socialMedia.svg";

const ContactAdmin = () => {
  return (
    <div>
      <section className="contactAdmin">
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
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your College"
                          aria-describedby="emailHelp"
                        />
                      </div>

                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          placeholder="Your Question..."
                          rows="3"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary sendmsg">
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
