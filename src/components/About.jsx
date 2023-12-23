/* eslint-disable react/prop-types */
import { useState,useRef } from "react";

const About = ({
  mailtoLink,
  setEmailAddress,
  about1Paragraph,
  setAbout1Paragraph,
  about1ImageSource,
  setAbout1ImageSource,
  setAbout2ImageSource2,
  about2ImageSource2,
  about2HeadingText,
  setAbout2HeadingText,
  about2Paragraph,
  setAbout2Paragraph,
  about3Paragraph,
  setAbout3Paragraph,
  setLinkedInLink,
  setInstagramLink,
  setTwitterLink,
  emailAddress,
  linkedInLink,
  twitterLink,
  instagramLink,
}) => {
  function addInput(setImageSource) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/";
    fileInput.id = "dynamicFileInput";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function (e) {
        handleImageChange(e,setImageSource)
        document.body.removeChild(fileInput);
    });

    fileInput.click();
}
  const handleImageChange = (e , setImage) => {
    const file = e.target.files[0];

    if (file) {
      setImage([URL.createObjectURL(file),file]);
    }
  };
  return (
    <section id="about-me">
      <div id="about-1">
        <div id="intro">
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <p>
            <textarea
              id="about1Line2-input"
              className="user-input"
              onChange={(e) => setAbout1Paragraph(e.target.value)}
              value={about1Paragraph}
            />
          </p>
        </div>
        <div id="about-pic">
            <img
              id="photographer"
              src={about1ImageSource[0]}
              alt=""
              onClick={() => addInput(setAbout1ImageSource)}
            />
        </div>
      </div>
      <div id="about-2">
        <div id="about-pic-2">
            <img
              id="photographer"
              src={about2ImageSource2[0]}
              alt=""
              onClick={() => addInput(setAbout2ImageSource2)}
            />
        </div>
        <div id="intro-2">
          <h2>
            <input
              id="about2HeadingText-input"
              className="user-input"
              onChange={(e) => setAbout2HeadingText(e.target.value)}
              value={about2HeadingText}
            />
          </h2>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <p>
            <textarea
              id="about2Paragraph-input"
              className="user-input"
              onChange={(e) => setAbout2Paragraph(e.target.value)}
              value={about2Paragraph}
            />
          </p>
        </div>
      </div>
      <div id="about-3">
        <p id="gitp">
          <textarea
            id="about3Line1-input"
            className="user-input"
            onChange={(e) => setAbout3Paragraph(e.target.value)}
            value={about3Paragraph}
          />{" "}
        </p>
        <div id="gitd">
          {" "}
          <div
            id="gitc"
            onClick={() => {
              window.location.href = mailtoLink;
            }}
          >
            <span>Get</span>
            <span>in</span>
            <span>touch</span>
          </div>
        </div>
        <div id="gita">
          <input
            className="user-input"
            onChange={(e) => setEmailAddress(e.target.value)}
            value={emailAddress}
          ></input>
          <input
            className="user-input"
            onChange={(e) => setLinkedInLink(e.target.value)}
            value={linkedInLink}
          ></input>
          <input
            className="user-input"
            onChange={(e) => setInstagramLink(e.target.value)}
            value={instagramLink}
          ></input>
          <input
            className="user-input"
            onChange={(e) => setTwitterLink(e.target.value)}
            value={twitterLink}
          ></input>
        </div>
      </div>
    </section>
  );
};

export default About;
