import React from "react";
import "./UploadNotes.css";
import backgroundWall from "../../../images/backgroundWall.png";
import firebase from "../../../firebase";

const UploadNotes = () => {
  return (
    <>
      <div className="container-fluid uploadNotesBG">
        <img className="bgImg" src={backgroundWall} alt="bgimage" />
        <div className="container form_box layer">
          <div className="content1">
            <h3>Upload Notes</h3>
            <p>
              Please fill all the information so that we will give you your
              credit.
            </p>
          </div>
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Your Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Your Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Chapter Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chapter Name"
                />
              </div>
            </div>
            <div className="form-group row">
              {/* <label>Select Fields</label> */}
              <div className="dropdownTwo">
                <div className="dropdown_menu my-2 ">
                  <label>Select SUB</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Subject</option>
                    <option value="1">
                      Fundamentals of computer programming
                    </option>
                    <option value="2">Data Structures</option>
                    <option value="3">Discrete mathematics</option>
                    <option value="3">Database management system</option>
                    <option value="3">Theory of computation</option>
                    <option value="3">Java programming</option>
                    <option value="3">Artificial intelligence(AI)</option>
                    <option value="3">Internet of things(IOT)</option>
                    <option value="3">Cyber security</option>
                    <option value="3">Compiler Design</option>
                    <option value="3">
                      Microprocessors and Micrcontrollers
                    </option>
                  </select>
                </div>
                <div className="dropdown_menu my-2 mt-3 ">
                  <label>Select SEM</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Semester</option>
                    <option value="1">Semester-1</option>
                    <option value="2">Semester-2</option>
                    <option value="3">Semester-3</option>
                    <option value="4">Semester-4</option>
                    <option value="5">Semester-5</option>
                    <option value="6">Semester-6</option>
                    <option value="7">Semester-7</option>
                    <option value="8">Semester-8</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <label className="me-2" for="exampleFormControlFile1">
                Upload Your Notes
              </label>
              <input
                type="file"
                className="form-control-file chooseFileInput"
                id="exampleFormControlFile1"
              />
            </div>
            <hr
              className="w-80 mx-auto"
              style={{ color: "white", opacity: "1" }}
            />
            <button className="btn btn-outline-success upload_notes_btn mt-3">
              Upload Notes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadNotes;
