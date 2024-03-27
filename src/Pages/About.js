import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Button from "../Button";
import "./About.css";

function About() {
  return (
    <>
      <div className="topper" style={{ backgroundImage: "url(img-9.jpg)" }}>
        <div className="wrapper">
          <h1>ABOUT</h1>
          <Button goTo="/" customStyle="back-home">
            Back Home
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="img-wrapper">
          <img src="img-8.jpg" alt="about" />
        </div>

        <div className="about-info">
          <div className="info-wrapper">
            <h3>About Us</h3>
            <h2>WE PROVIDE COMFORTABLE DRESSES & FASHION STYLES</h2>
            <p className="about-p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text.
            </p>
            <Button goTo="/">Contact Us</Button>
          </div>
        </div>
      </div>

      <div className="feedback-container">
        <div className="top-wrapper">
          <h2>
            CUSTOMER <span className="lol">FEEDBACK</span>
          </h2>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring
          </p>
        </div>

        <div className="customer">
          <div className="customer-info">
            <i className="fas fa-smile-beam" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <span className="customer-name">John Cena (femele version)</span>
          </div>

          <div className="customer-img">
            <img
              src="img-6.jpg"
              alt="happy customer"
              width="500px"
              height="500px"
            />
          </div>
        </div>

        <div className="check-us-out">
          <h2 className="check-out">Don't forget to check us out!</h2>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
