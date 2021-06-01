import React from "react";
import "./ContactAdmin.css";

const ContactAdmin = () => {
  return (
    <div>
      <section className="contactAdmin">
        <div class="text-center py-5">
          <h1 class="display-4">Contact To Admin</h1>
          <hr class="w-25 mx-auto" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto mb-5">
              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your College"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="mb-3">
                  <textarea
                    class="form-control"
                    placeholder="Your Question..."
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAdmin;
