import { useEffect, useState } from "react";
import gsap, { Power4, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [curNav, setCurNav] = useState("work");

  useEffect(() => {
    const track = document.getElementById("image-track");
    const work = document.getElementById("work");
    const about = document.getElementById("about");

    // Kill existing ScrollTriggers if they exist
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (curNav === "work") {
      work.style.color = "whitesmoke";
      work.style.opacity = "1";
      about.style.color = "gray";
      about.style.opacity = "0.75";

      // Create ScrollTrigger for the "work" section
      gsap.to("#image-track", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress * -90;
            const nextPercentage = Math.max(Math.min(progress, 0), -90);
            const countpercentage = (nextPercentage / 90) * 176;
            switch (true) {
              case countpercentage <= 0 && countpercentage > -11:
                gsap.to("#count", {
                  y: 0,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -11 && countpercentage >= -33:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.0185,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -33 && countpercentage >= -55:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.0360 ,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -55 && countpercentage >= -77:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.0540,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -77 && countpercentage >= -99:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.0720,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -99 && countpercentage >= -121:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.0900,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -121 && countpercentage >= -143:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.1080,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -143 && countpercentage >= -165:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.1255,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -165 && countpercentage >= -176:
                gsap.to("#count", {
                  y: - window.innerWidth * 0.1440,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              default:
                gsap.to("#count", {
                  y: 0,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
            }
            track.dataset.percentage = nextPercentage;
            gsap.to(track, {
              xPercent: nextPercentage,
              duration: 0.8,
              ease: Power2.easeOut,
            });
            const imagePercentage = (nextPercentage / 90) * 100;
            for (const image of track.getElementsByClassName("image")) {
              gsap.to(image, {
                objectPosition: `${100 + imagePercentage}% center`,
                duration: 1,
                ease: Power2.easeOut,
              });
            }
            track.dataset.prevPercentage = nextPercentage;
          },
        },
      });
    } else {
      about.style.color = "whitesmoke";
      about.style.opacity = "1";
      work.style.color = "gray";
      work.style.opacity = "0.75";

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#not-intro",
          start: "top 85%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
      const targets = gsap.utils.toArray(
        "#working-experiences h2 span , #working-experiences ul li span,#awards-and-recognitions h2 span, #awards-and-recognitions ul li span ,#get-in-touch h2 span, #get-in-touch ul li span "
      );
      targets.forEach((child) => {
        tl.fromTo(
          child,
          {
            opacity: 0,
            y: "4vw",
          },
          {
            opacity: 1,
            duration: 0.6,
            y: 0,
            ease: Power4.easeIn,
          }
        );
      });
    }
  }, [curNav]);

  function showAbout() {
    const tl = gsap.timeline();
    const images = gsap.utils.toArray(".image");
    const introText = gsap.utils.toArray(
      "#introduction  h2 span , #introduction p  span  span"
    );
    tl.to("#plus", {
      scale: 0,
      duration: 0.6,
      ease: Power2.easeIn,
    })
      .to(
        images,
        {
          y: -window.innerHeight * 0.85,
          duration: 0.8,
          stagger: 0.05,
          ease: Power2.easeIn,
        },
        0.2
      )
      .to(
        "#counter",
        {
          y: window.innerHeight * 0.6,
          duration: 0.8,
          ease: Power2.easeIn,
          onComplete: () => {
            scrollToTop(0);
            console.log("s");
          },
        },

        0.4
      ).to(
        "#about-me",
        {
          opacity: 1,
        }
      )
      .to(introText, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: Power4.easeOut,
      })
  }
  function showWork() {
    const tl = gsap.timeline();
    const track = document.getElementById("image-track");
    const images = gsap.utils.toArray(".image");
    const introText = gsap.utils.toArray(
      "#introduction  h2 span , #introduction p  span  span"
    );
    tl.to(introText, {
      duration: 0.6,
      y: "4vw",
      opacity: 0,
      ease: Power4.easeIn,
    })
      .to("#about-me", {
        opacity: 0,
      })
      .to("#plus", {
        onStart: () => {
          scrollToTop(
            (document.documentElement.scrollHeight *
              track.dataset.prevPercentage) /
              -90
          );
        },
        scale: 1,
        duration: 0.6,
        ease: Power2.easeOut,
      })
      .to(
        images,
        {
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: Power2.easeOut,
        },
        0.8
      )
      .to(
        "#counter",
        {
          y: 0,
          duration: 0.8,
          ease: Power2.easeOut,
        },
        0.8
      );
  }
  function scrollToTop(y) {
    console.log(y);
    window.scrollTo({
      top: y,
      behavior: "auto", // You can use "auto" or "smooth" for scrolling behavior
    });
  }
  return (
    <div>
      <section className="wrapper">
        <div
          id="image-track"
          className=""
          data-mouse-down-at="0"
          data-prev-percentage="0"
        >
          <img src="/house.jpg" alt="" className="image" draggable="false" />
          <img
            src="/DSC_0320-2.jpg"
            alt=""
            className="image"
            draggable="false"
          />
          <img src="/DSC_0105.jpg" alt="" className="image" draggable="false" />
          <img src="/estate.jpg" alt="" className="image" draggable="false" />
          <img src="/DSC_0441.jpg" alt="" className="image" draggable="false" />
          <img src="/tower.jpg" alt="" className="image" draggable="false" />
          <img src="/DSC_0315.jpg" alt="" className="image" draggable="false" />
          <img src="/DSC_0338.jpg" alt="" className="image" draggable="false" />
          <img src="/fg 1.jpg" alt="" className="image" draggable="false" />
        </div>
      </section>
      <p id="plus">+</p>
      <p id="navbar">
        <span
          id="work"
          onClick={() => {
            setCurNav("work");
            showWork();
          }}
        >
          Work
        </span>{" "}
        <span
          id="about"
          onClick={() => {
            setCurNav("about");
            showAbout();
          }}
        >
          About
        </span>
      </p>
      <section id="counter">
        <p id="count">
          <span id="1">1</span>
          <span id="2">2</span>
          <span id="3">3</span>
          <span id="4">4</span>
          <span id="5">5</span>
          <span id="6">6</span>
          <span id="7">7</span>
          <span id="8">8</span>
          <span id="9">9</span>
        </p>
        <p>-</p>
        <p>9</p>
      </section>
      <section id="about-me">
        <div id="introduction">
          <h2 className="about-line">
            <span>Introduction</span>
          </h2>
          <p>
            <span className="about-line">
              <span>
                Hello, I'm [Your Name], a passionate photographer dedicated{" "}
              </span>
            </span>
            <span className="about-line">
              <span>
                to capturing moments that tell unique stories. My journey in
              </span>
            </span>
            <span className="about-line">
              <span>
                the world of photography began [X years ago], and I've
              </span>
            </span>
            <span className="about-line">
              <span>been on a mission to freeze cherished moments in time</span>
            </span>
            <span className="about-line">
              <span>ever since.</span>
            </span>
          </p>
        </div>
        <div id="not-intro">
          <div id="working-experiences">
            <h2 className="about-line">
              <span>Working Experiences</span>
            </h2>
            <ul>
              <li className="about-line">
                <span>[Year]: [Job Title] at [Company/Organization] </span>
              </li>

              <li className="about-line">
                <span>[Year]: [Job Title] at [Company/Organization] </span>
              </li>
            </ul>
          </div>

          <div id="awards-and-recognitions">
            <h2 className="about-line">
              <span>Awards and Recognitions</span>
            </h2>
            <ul>
              <li className="about-line">
                <span>[Year]: [Award Name]</span>
              </li>

              <li className="about-line">
                <span>[Year]: [Award Name]</span>
              </li>
            </ul>
          </div>

          <div id="get-in-touch">
            <h2 className="about-line">
              <span>Get in Touch</span>
            </h2>
            <ul>
              <li className="about-line">
                <span>Email</span>
              </li>

              <li className="about-line">
                <span>LinkedIn</span>
              </li>

              <li className="about-line">
                <span>Instagram</span>
              </li>

              <li className="about-line">
                <span>X</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
