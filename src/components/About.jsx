/* eslint-disable react/prop-types */
const About = ({
  mailtoLink,
  about1Line1,
  about1Highlight1,
  about1Line2,
  about2Highlight2,
  about1ImageSource,
  about2ImageSource2,
  about2HeadingText,
  about2HeadingHighlight,
  about2Paragraph,
  about3Line1,
  about3Line2,
  about3Line3,
  linkedInLink,
  instagramLink,
  twitterLink,
}) => {
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
            {about1Line1}
            <span className="color-text">{about1Highlight1}</span> {about1Line2}{" "}
            <span className="color-text">{about2Highlight2}</span>
          </p>
        </div>
        <div id="about-pic">
          <img id="photographer" src={about1ImageSource} alt="" />
        </div>
      </div>
      <div id="about-2">
        <div id="about-pic-2">
          <img id="photographer-2" src={about2ImageSource2} alt="" />
        </div>
        <div id="intro-2">
          <h2>
            {about2HeadingText}
            <span className="color-text">{about2HeadingHighlight}</span>
          </h2>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <p>{about2Paragraph}</p>
        </div>
      </div>
      <div id="about-3">
        <p id="gitp">
          <span>{about3Line1}</span> <span>{about3Line2}</span>
          <span>{about3Line3}</span>
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
          <a href={mailtoLink}>Email</a>
          <a href={linkedInLink}>Linked In</a>
          <a href={instagramLink}>Instagram</a>
          <a href={twitterLink}>Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default About;
