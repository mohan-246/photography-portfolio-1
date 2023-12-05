import { useEffect, useState } from "react";
import gsap, { Power4, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [curNav, setCurNav] = useState("work");

  // useEffect(() => {
  //   const track = document.getElementById("image-track");

  //   gsap.to("#image-track", {
  //     scrollTrigger: {
  //       trigger: "body",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 1,
  //       onUpdate: (self) => {
  //         const progress = self.progress * -90;
  //         const nextPercentage = Math.max(Math.min(progress, 0), -90);
  //         const countpercentage = (nextPercentage / 90) * 176;
  //         switch (true) {
  //           case countpercentage <= 0 && countpercentage > -11:
  //             gsap.to("#count", { y: 0, duration: 0.8, ease: Power2.easeOut });
  //             break;
  //           case countpercentage < -11 && countpercentage >= -33:
  //             gsap.to("#count", {
  //               y: -28,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -33 && countpercentage >= -55:
  //             gsap.to("#count", {
  //               y: -56,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -55 && countpercentage >= -77:
  //             gsap.to("#count", {
  //               y: -84,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -77 && countpercentage >= -99:
  //             gsap.to("#count", {
  //               y: -110,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -99 && countpercentage >= -121:
  //             gsap.to("#count", {
  //               y: -138.5,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -121 && countpercentage >= -143:
  //             gsap.to("#count", {
  //               y: -166,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -143 && countpercentage >= -165:
  //             gsap.to("#count", {
  //               y: -194,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           case countpercentage < -165 && countpercentage >= -176:
  //             gsap.to("#count", {
  //               y: -220,
  //               duration: 0.8,
  //               ease: Power2.easeOut,
  //             });
  //             break;
  //           default:
  //             gsap.to("#count", { y: 0, duration: 0.8, ease: Power2.easeOut });
  //         }
  //         track.dataset.percentage = nextPercentage;
  //         gsap.to(track, {
  //           xPercent: nextPercentage,
  //           duration: 0.8,
  //           ease: Power2.easeOut,
  //         });
  //         for (const image of track.getElementsByClassName("image")) {
  //           gsap.to(image, {
  //             objectPosition: `${100 + nextPercentage}% center`,
  //             duration: 1,
  //             ease: Power2.easeOut,
  //           });
  //         }
  //         track.dataset.prevPercentage = nextPercentage;
  //       },
  //     },
  //   });
  // }, []);
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
                  y: -28,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -33 && countpercentage >= -55:
                gsap.to("#count", {
                  y: -56,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -55 && countpercentage >= -77:
                gsap.to("#count", {
                  y: -84,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -77 && countpercentage >= -99:
                gsap.to("#count", {
                  y: -110,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -99 && countpercentage >= -121:
                gsap.to("#count", {
                  y: -138.5,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -121 && countpercentage >= -143:
                gsap.to("#count", {
                  y: -166,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -143 && countpercentage >= -165:
                gsap.to("#count", {
                  y: -194,
                  duration: 0.8,
                  ease: Power2.easeOut,
                });
                break;
              case countpercentage < -165 && countpercentage >= -176:
                gsap.to("#count", {
                  y: -220,
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
            for (const image of track.getElementsByClassName("image")) {
              gsap.to(image, {
                objectPosition: `${100 + nextPercentage}% center`,
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

      const aboutSection = document.getElementById("about-me");
      const aboutChild = gsap.utils.toArray(".about-line")
      console.log(aboutChild)
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 100%",
          end: "bottom 90%",
          scrub: 1,
          markers: true,
          onUpdate: (self) => console.log(self.progress),
        },
      });
      
      aboutChild.forEach((child, index) => {
        tl.fromTo(
          child,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.6, 
            ease : Power4.easeIn
          },
        );
      });
    }
  }, [curNav]);

  function showAbout() {
    const tl = gsap.timeline();
    const images = gsap.utils.toArray(".image");
    
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
      ).fromTo("#about-me",{
        
        opacity:0
      },
      {
        opacity: 1,
        y:0,
        duration: 0.5
      })
  }
  function showWork() {
    const tl = gsap.timeline();
    const track = document.getElementById("image-track");
    const images = gsap.utils.toArray(".image");

    tl.to(
      "#about-me",
      {
        opacity: 0,
      }
    )
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
      <div className="wrapper">
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
      </div>
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
      <div id="counter">
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
      </div>
      <section id="about-me">
        <div id="introduction">
          <h2 className="about-line">Introduction</h2>
          <p>
            <span className="about-line">
              Hello, I'm [Your Name], a passionate photographer dedicated{" "}
            </span>
            <span className="about-line">
              to capturing moments that tell unique stories. My journey in{" "}
            </span>
            <span className="about-line">
              the world of photography began [X years ago], and I've been{" "}
            </span>
            <span className="about-line">
              on a mission to freeze cherished moments in time ever{" "}
            </span>
            <span className="about-line">since.</span>
          </p>
        </div>

        <div id="working-experiences">
          <h2 className="about-line">Working Experiences</h2>
          <ul>
            <li>
              <span className="about-line">
                [Year]: [Job Title] at [Company/Organization]
              </span>
            </li>
            <li>
              <span className="about-line">
                [Year]: [Job Title] at [Company/Organization]
              </span>
            </li>
          </ul>
        </div>

        <div id="awards-and-recognitions">
          <h2 className="about-line">Awards and Recognitions</h2>
          <ul>
            <li>
              <span className="about-line">[Year]: [Award Name]</span>
            </li>
            <li>
              <span className="about-line">[Year]: [Award Name]</span>
            </li>
          </ul>
        </div>

        <div id="get-in-touch">
          <h2 className="about-line">Get in Touch</h2>
          <ul>
            <span className="about-line">
              <li>Email</li>
            </span>
            <span className="about-line">
              <li>LinkedIn</li>
            </span>
            <span className="about-line">
              <li>Instagram</li>
            </span>
            <span className="about-line">
              <li>X</li>
            </span>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Landing;
