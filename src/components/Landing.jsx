import { useEffect, useState } from "react";
import gsap, { Power4, Power2 , Back  } from "gsap";
import { CustomEase } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/all";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Observer);
  gsap.registerPlugin(CustomEase)
  const [curNav, setCurNav] = useState("work");
  const [curStart, setCurStart] = useState("carousel");
  const [selectedImage, setSelectedImage] = useState("null");
  const [prevImageCord, setPrevImageCord] = useState([]);
  const imageSources = [
    "https://images.unsplash.com/photo-1701600713610-0f724c65168d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    scrollToTop(0);
  }, []);
  useEffect(() => {
    const track = document.getElementById("image-track");
    const track2 = document.getElementById("image-track-2");
    const work = document.getElementById("work");
    const about = document.getElementById("about");

    // Kill existing ScrollTriggers if they exist
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (curNav === "work") {
      work.style.color = "whitesmoke";
      work.style.opacity = "1";
      about.style.color = "gray";
      about.style.opacity = "0.75";

      if (selectedImage == "null") {
        gsap.to("#image-track , #image-track-2", {
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress * -88.2;

              const nextPercentage = Math.max(Math.min(progress, 0), -100);
              const countpercentage = (nextPercentage / 88.2) * 154;
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
                    y: -window.innerWidth * 0.01,
                    duration: 0.8,
                    ease: Power2.easeOut,
                  });
                  break;
                case countpercentage < -33 && countpercentage >= -55:
                  gsap.to("#count", {
                    y: -window.innerWidth * 0.02,
                    duration: 0.8,
                    ease: Power2.easeOut,
                  });
                  break;
                case countpercentage < -55 && countpercentage >= -77:
                  gsap.to("#count", {
                    y: -window.innerWidth * 0.03,
                    duration: 0.8,
                    ease: Power2.easeOut,
                  });
                  break;
                case countpercentage < -77 && countpercentage >= -99:
                  gsap.to("#count", {
                    y: -window.innerWidth * 0.04,
                    duration: 0.8,
                    ease: Power2.easeOut,
                  });
                  break;
                case countpercentage < -99 && countpercentage >= -121:
                  gsap.to("#count", {
                    y: -window.innerWidth * 0.05,
                    duration: 0.8,
                    ease: Power2.easeOut,
                  });
                  break;
                case countpercentage < -121 && countpercentage >= -143:
                  gsap.to("#count", {
                    y: -window.innerWidth * 0.06,
                    duration: 0.8,
                    ease: Power2.easeOut,
                  });
                  break;
                case countpercentage < -143 && countpercentage >= -154:
                  gsap.to("#count", {
                    y: -window.innerWidth * 0.07,
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
              gsap.to([track, track2], {
                xPercent: nextPercentage,
                duration: 0.4,
                ease: Power2.easeOut,
              });
              const imagePercentage = (nextPercentage / 88.2) * 100;
              const allImages = [
                ...track.getElementsByClassName("image"),
                ...track2.getElementsByClassName("image"),
              ];
              for (const image of allImages) {
                gsap.to(image, {
                  objectPosition: `${100 + imagePercentage}% center`,
                  duration: 0.4,
                  ease: Power2.easeOut,
                });
              }
              track.dataset.prevPercentage = nextPercentage;
            },
          },
        });
      }
      // else {
      //   const id = selectedImage;
      //   const track = document.getElementById("image-track");
      //   const smallImage = document.getElementById(`${id}-s`);
      //   const pic = document.getElementById(id);
      //   const tl = gsap.timeline({ paused: true });
      //   const pics = gsap.utils.toArray("#image-track .image");
      //   const imagePercentage = (track.dataset.prevPercentage / 90) * 100;
      //   const newImage = document.getElementById(`${id}-f`);
      //   tl.to(
      //     pics,
      //     {
      //       width: "35vmin",
      //       height: "55vmin",
      //       duration: 1.4,
      //       ease: Power4.easeOut,
      //     },
      //     0
      //   )
      //     .to(
      //       track,
      //       {
      //         width: "auto",
      //         gap: "1.25vw",
      //         bottom: "50%",
      //         left: "40vw",
      //         height: "55vmin",
      //         duration: 1.4,
      //         transform: `translateY(27.5vmin)`,
      //         ease: Power4.easeOut,
      //       },
      //       0
      //     )
      //     .to(
      //       pic,
      //       {
      //         opacity: 1,
      //         duration: 0,
      //       },
      //       0
      //     )
      //     .fromTo(
      //       smallImage,
      //       {
      //         y: 0,
      //         opacity: 1,
      //       },
      //       { y: "5vh", duration: 0.6, opacity: 0, ease: Power4.easeOut },
      //       0.8
      //     )
      //     .to(
      //       newImage,
      //       {
      //         height: "35vmin",
      //         width: "55vmin",
      //         top: `${prevImageCord[0]}px`,
      //         left: `${prevImageCord[1]}px`,
      //         objectFit: "cover",
      //         objectPosition: `${imagePercentage}% center`,
      //         ease: Power4.easeOut,
      //         duration: 1.4,
      //       },
      //       0
      //     );
      //   setTimeout(() => {
      //     const ScrollObserver = Observer.create({
      //       target: window, // can be any element (selector text is fine)
      //       type: "wheel,touch", // comma-delimited list of what to listen for
      //       onUp: () => {
      //         tl.play();
      //         console.log("up");
      //         setTimeout(() => {
      //           setSelectedImage("null");
      //           ScrollObserver.kill();
      //         }, 1600);
      //       },
      //       onDown: () => {
      //         tl.play();
      //         console.log("down");
      //         setTimeout(() => {
      //           setSelectedImage("null");
      //           ScrollObserver.kill();
      //         }, 1600);
      //       },
      //     });
      //   }, 1600);
      // }
    } else {
      about.style.color = "whitesmoke";
      about.style.opacity = "1";
      work.style.color = "gray";
      work.style.opacity = "0.75";

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#not-intro",
          start: "top 85%",
          end: "bottom 75%",
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
  }, [curNav, selectedImage]);

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
      )
      .to("#about-me", {
        opacity: 1,
      })
      .to(introText, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: Power4.easeOut,
      });
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
  function showPicSmall(id) {
    console.log("S", id);
  }
  function showPicFake(id) {
    console.log("F", id);
  }

  function showPic(id) {
    setSelectedImage(id);
    const track = document.getElementById("image-track");
    const smallImage = document.getElementById(`${id}-s`);
    const track2 = document.getElementById("image-track-2");
    const pic = document.getElementById(id);
    const tl = gsap.timeline();
    const pics = gsap.utils.toArray("#image-track .image");
    const newImage = document.getElementById(`${id}-f`);
    const track2Images = gsap.utils.toArray(`#image-track-2 .image`);
    const match = id.match(/(\d+)$/);
    const numericValue = match ? parseFloat(match[1]) - 1 : 0;
    console.log(numericValue, numericValue * window.innerWidth);
    tl.to(
      track,
      {
        width: "27vw",
        gap: "0.2vw",
        height: "1.8vw",
        bottom: "5vh",
        left: "68vw",
        transform: "translateY(0)",
        duration: 1.4,
        ease: Power4.easeOut,
      },
      0
    )
      .to(
        pics,
        {
          width: "3.2vw",
          height: "1.8vw",
          duration: 1.4,
          ease: Power4.easeOut,
        },
        0
      )
      .to(
        pic,
        {
          opacity: 0,
          duration: 0,
        },
        0
      )
      .fromTo(
        smallImage,
        {
          y: "5vh",
          opacity: 0,
        },
        { y: 0, duration: 0.6, opacity: 1, ease: Power4.easeOut },
        0.8
      )
      .to(
        track2Images,
        {
          height: "100vh",
          width: "100vw",
          ease:  CustomEase.create("custom", "M0,0 C0,0 -0.045,0.78 0,0.795 0.038,0.808 0.31,0.785 0.347,0.803 0.383,0.821 0.578,0.793 0.612,0.817 0.645,0.841 0.744,0.821 0.78,0.843 0.842,0.88 0.847,0.86 0.875,0.897 0.902,0.934 0.912,0.912 0.936,0.953 0.961,0.999 0.946,0.919 0.968,0.968 0.991,1.021 1,1 1,1 "),
          duration: 3,
        },
        0
      )
      .to(
        track2,
        {
          gap: 0,
          left: "0",
          width: "800vw",
          height: "100vh",
          bottom: 0,
          transform: `translate(-${numericValue * window.innerWidth}px, 0 )`,
          ease:  CustomEase.create("custom", "M0,0 C0,0 -0.045,0.78 0,0.795 0.038,0.808 0.31,0.785 0.347,0.803 0.383,0.821 0.578,0.793 0.612,0.817 0.645,0.841 0.744,0.821 0.78,0.843 0.842,0.88 0.847,0.86 0.875,0.897 0.902,0.934 0.912,0.912 0.936,0.953 0.961,0.999 0.946,0.919 0.968,0.968 0.991,1.021 1,1 1,1 "),
          duration: 3,
        },
        0
      )
      .to(
        newImage,
        {
          opacity: 1,
          duration: 0,
        },
        0
      );
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
          <img
            id="pic-1"
            onClick={() => showPic("pic-1")}
            src="https://images.unsplash.com/photo-1701600713610-0f724c65168d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-2"
            onClick={() => showPic("pic-2")}
            src="https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-3"
            onClick={() => showPic("pic-3")}
            src="https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-4"
            onClick={() => showPic("pic-4")}
            src="https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-5"
            onClick={() => showPic("pic-5")}
            src="https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-6"
            onClick={() => showPic("pic-6")}
            src="https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-7"
            onClick={() => showPic("pic-7")}
            src="https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-8"
            onClick={() => showPic("pic-8")}
            src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
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
            console.log("A");
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
        </p>
        <p>-</p>
        <p>8</p>
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
      <section>
        <div
          id="image-track-small"
          className=""
          data-mouse-down-at="0"
          data-prev-percentage="0"
        >
          <img
            id="pic-1-s"
            onClick={() => showPicSmall("pic-1-s")}
            src="https://images.unsplash.com/photo-1701600713610-0f724c65168d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-2-s"
            onClick={() => showPicSmall("pic-2-s")}
            src="https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-3-s"
            onClick={() => showPicSmall("pic-3-s")}
            src="https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-4-s"
            onClick={() => showPicSmall("pic-4-s")}
            src="https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-5-s"
            onClick={() => showPicSmall("pic-5-s")}
            src="https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-6-s"
            onClick={() => showPicSmall("pic-6-s")}
            src="https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-7-s"
            onClick={() => showPicSmall("pic-7-s")}
            src="https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
          <img
            id="pic-8-s"
            onClick={() => showPicSmall("pic-8-s")}
            src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image"
            draggable="false"
          />
        </div>
        <div id="image-track-2" data-mouse-down-at="0" data-prev-percentage="0">
          <img
            id="pic-1-f"
            src="https://images.unsplash.com/photo-1701600713610-0f724c65168d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-2-f"
            src="https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-3-f"
            src="https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-4-f"
            src="https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-5-f"
            src="https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-6-f"
            src="https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-7-f"
            src="https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
          <img
            id="pic-8-f"
            src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image"
            draggable="false"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
