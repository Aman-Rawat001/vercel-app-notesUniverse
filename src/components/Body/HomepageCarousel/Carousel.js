import React from "react";
import img1 from "../../../images/testimonialImg1.png";
import img2 from "../../../images/testimonialImg2.png";
import img3 from "../../../images/testimonialImg3.png";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="homepage_carousel">
        <div className="text-center py-4">
          <h3>WHAT STUDENTS ARE SAYING ABOUT US</h3>
        </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block testimonialImg" alt="..." />
              <div class="container testimonialText">
                <h5>Kareena</h5>
                <p>
                  It is a great platform to get and share study resources,
                  especially the resource contributed by past students and who
                  have done similar courses
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block testimonialImg" alt="..." />
              <div class="container testimonialText">
                <h5>Akash</h5>
                <p>
                  One of the most useful resource available is 24/7 access to
                  study guides and notes. It helped me a lot to clear my final
                  semester exams
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block testimonialImg" alt="..." />
              <div class="container testimonialText">
                <h5>Adesh</h5>
                <p>
                  Notes_Universe is super useful, because you get best notes for free, You even benefit from summaries made a couple
                  of years ago
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
