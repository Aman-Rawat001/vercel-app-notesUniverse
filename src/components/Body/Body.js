import React from "react";
import "./Body.css";
import { Switch, Route } from "react-router-dom";
//importing components.
import SearchNotes from "./SearchNotes/SearchNotes.js";
import UploadNotes from "./UploadNotes/UploadNotes.js";
import ContactAdmin from "./ContactAdmin/ContactAdmin.js";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/Homepage.js";
import Footer from "./Footer/Footer.js";

const Body = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search_notes" component={SearchNotes} />
        <Route exact path="/upload_notes" component={UploadNotes} />
        <Route exact path="/contact" component={ContactAdmin} />
      </Switch>
      <Footer />
    </>
  );
};

export default Body;
