import { useEffect, useState } from "react";
import gsap, { Power4, Power2, Back, Power1 } from "gsap";
import { CustomEase } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/all";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Observer);
  gsap.registerPlugin(CustomEase);
  const [curNav, setCurNav] = useState("work");
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
    const tracker = document.getElementById("tracker");
    const blob = document.getElementById("gitc");
    window.onpointermove = (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          transform: `translate(${(clientX * 50) / window.innerWidth}%,${
            (clientY * 50) / window.innerHeight
          }%)`,
        },
        {
          duration: 3000,
          fill: "forwards",
        }
      );
      tracker.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  useEffect(() => {
    const track = document.getElementById("image-track");
    const track2 = document.getElementById("image-track-2");
    const work = document.getElementById("work");
    const about = document.getElementById("about");
    const tracker = document.getElementById("tracker");
    // Kill existing ScrollTriggers if they exist
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (curNav === "work") {
      work.style.color = "whitesmoke";
      document.body.style.overflowY = "auto";
      tracker.style.background = "whitesmoke";
      work.style.opacity = "1";
      about.style.color = "gray";
      Observer.getById("aboutObserver")?.kill();
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
                duration: 0.6,
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
                  duration: 0.6,
                  ease: Power2.easeOut,
                });
              }
              track.dataset.prevPercentage = nextPercentage;
            },
          },
        });
      } else {
        const id = selectedImage;
        const track = document.getElementById("image-track");
        const track2 = document.getElementById("image-track-2");
        const smallImage = document.getElementById(`${id}-s`);
        const pic = document.getElementById(id);
        console.log(pic);
        const tl = gsap.timeline({ paused: true });
        const pics = gsap.utils.toArray("#image-track .image");
        const newImage = document.getElementById(`${id}-f`);
        document.body.scrollTo({ top: 0, behavior: "auto" });
        track.dataset.prevPercentage = 0;
        tl.to(
          pics,
          {
            width: "35vmin",
            height: "55vmin",
            duration: 1,
            ease: Power4.easeIn,
          },
          1
        )
          .to(
            track,
            {
              width: "auto",
              gap: "1.25vw",
              bottom: "50%",
              left: "40vw",
              height: "55vmin",
              duration: 1,
              transform: `translate(0,27.5vmin)`,
              ease: Power4.easeIn,
            },
            1
          )
          .to(
            pic,
            {
              opacity: 1,
              duration: 0,
            },
            0
          )
          .to(
            smallImage,
            {
              opacity: 0,
              duration: 0,
            },
            0
          )
          .to(
            newImage,
            {
              top: "-100vh",
              ease: Power4.easeIn,
              onComplete: () => {
                console.log("appending");
                newImage.classList.add("image-f");

                for (let i = 1; i < 9; i++) {
                  const img = document.getElementById(`pic-${i}-f`);
                  track2.appendChild(img);
                }
              },
              duration: 1,
            },
            0
          )
          .to(
            [".image-f", newImage],
            {
              height: "55vmin",
              width: "35vmin",
              opacity: 0,
              duration: 0,
              position: pic.style.position,
            },
            2
          )
          .to(track2, {
            height: "55vmin",
            width: "auto",
            gap: "1.25vw",
            left: "40vw",
            bottom: "50%",
            transform: `translate(0 ,27.5vmin)`,
            duration: 0,
          })
          .to(
            "#plus",
            {
              scale: 1,
              duration: 0.8,
              ease: Power4.easeIn,
            },
            2
          );
        setTimeout(() => {
          const ScrollObserver = Observer.create({
            id: "showPicObserver",
            target: window,
            type: "wheel,touch",
            onUp: (e) => {
              tl.play();
              setTimeout(() => {
                setSelectedImage("null");
                ScrollObserver.kill();
              }, 2000);
            },
            onDown: () => {
              tl.play();
              setTimeout(() => {
                setSelectedImage("null");
                ScrollObserver.kill();
              }, 2000);
            },
          });
        }, 1600);
      }
    } else {
      about.style.color = "whitesmoke";
      document.body.style.overflowY = "hidden";
      about.style.opacity = "1";
      work.style.color = "gray";
      tracker.style.background =
        "linear-gradient(to right, aquamarine, mediumpurple)";
      let index = 0,
        interval = 1000;

      const rand = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

      const animate = (star) => {
        star.style.setProperty(
          "--star-left",
          `${rand(0, window.innerWidth)}px`
        );
        star.style.setProperty(
          "--star-top",
          `${rand(0, 3 * window.innerHeight)}px`
        );

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
      };

      for (const star of document.getElementsByClassName("magic-star")) {
        setTimeout(() => {
          animate(star);

          setInterval(() => animate(star), 1000);
        }, index++ * (interval / 6));
      }
      
    }
  }, [curNav, selectedImage]);

  function showAbout() {
    Observer.getById("showPicObserver")?.disable();
    const tl = gsap.timeline();
    const images = gsap.utils.toArray(".image:not(.image-f, .image-s)");
    if (selectedImage != "null") {
      document.getElementById(selectedImage).style.opacity = 1;
      document.getElementById(`${selectedImage}-s`).style.opacity = 0;
    }
    gsap.to("#tracker", {
      background: "linear-gradient(to right, aquamarine, mediumpurple)",
      duration: 1,
      ease: "linear",
    });
    tl.to("#plus", {
      scale: 0,
      duration: 0.6,
      ease: Power2.easeIn,
    })
      .to(
        images,
        {
          y: -window.innerHeight,
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
        duration: 0.8,
        ease: Power2.easeOut
      })
  }
  function showWork() {
    Observer.getById("showPicObserver")?.enable();
    const tl = gsap.timeline();
    const track = document.getElementById("image-track");
    const images = gsap.utils.toArray(".image");
    setTimeout(() => {
      if (selectedImage != "null") {
        document.getElementById(selectedImage).style.opacity = 0;
        document.getElementById(`${selectedImage}-s`).style.opacity = 1;
      }
    }, 1600);
    tl.to("#about-me", {
      duration: 0.6,
      opacity: 0,
      ease: Power4.easeIn,
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

    track2.removeChild(newImage);
    while (track2.firstChild) {
      var child = track2.firstChild;
      track2.removeChild(child);
      document.body.appendChild(child);
    }
    document.body.appendChild(newImage);
    const rect = pic.getBoundingClientRect();
    newImage.style.position = "fixed";
    newImage.style.top = rect.top + "px";
    newImage.style.left = rect.left + "px";
    setPrevImageCord([newImage.style.top, newImage.style.left]);
    newImage.className = pic.className;
    newImage.style.objectPosition = pic.style.objectPosition;
    const match = id.match(/(\d+)$/);
    const numericValue = match ? parseFloat(match[1]) - 1 : 0;

    tl.to(
      track,
      {
        width: "27vw",
        gap: "0.2vw",
        height: "1.8vw",
        bottom: "5vh",
        left: "68vw",
        transform: "translate(0,0)",
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
        track2,
        {
          gap: 0,
          left: "0",
          width: "800vw",
          height: "100vh",
          bottom: 0,
          transform: `translate(-${numericValue * window.innerWidth}px, 0 )`,
          ease: Power4.easeOut,
          duration: 3,
        },
        0
      )
      .to(
        newImage,
        {
          opacity: 1,
          height: "55vmin",
          width: "35vmin",
          objectFit: "cover",
          duration: 0,
        },
        0
      )
      .to(
        newImage,
        {
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          duration: 1.8,
          ease: Power4.easeOut,
          // onComplete: () => newImage.classList.add("image-f")
        },
        0
      )
      .to(
        ".image-f",
        {
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: "100vw",
          duration: 0,
        },
        0
      )
      .to(
        "#plus",
        {
          scale: 0,
          duration: 1.4,
          ease: Power4.easeOut,
        },
        0
      )
      .to(
        "#count",
        {
          y: -window.innerWidth * numericValue * 0.01,
          duration: 0.8,
          ease: Power2.easeOut,
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
          data-prev-percentage={0}
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
        <div id="about-1">
          <div id="intro">
            <p>
              Hi I am Mohan, As a{" "}
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
              <span className="color-text">photographer</span> I am dedicated to
              transforming ordinary moments into extraordinary{" "}
              <span className="color-text">memories.</span>
            </p>
          </div>
          <div id="about-pic">
            <img
              id="photographer"
              src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div id="about-2">
          <div id="about-pic-2">
            <img
              id="photographer-2"
              src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div id="intro-2">
            <h2>
              My Lens, <span className="color-text">Your Story</span>
            </h2>
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
              With a passion for capturing fleeting moments and transforming
              them into lasting memories, I embark on a visual journey, guided
              by the light and emotions that surround me. My photography
              transcends mere images, weaving together narratives that resonate
              with viewers on a deeper level. Whether it's the raw energy of a
              live performance, the quiet intimacy of a wedding, or the timeless
              beauty of a landscape, I strive to create images that reflect the
              essence of the subject and evoke a sense of connection.
            </p>
          </div>
        </div>
        <div id="about-3">
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
          <p id="gitp">
            <span>If you are looking to</span>{" "}
            <span>discuss a project or just</span> <span>talk photography</span>
          </p>
          <div id="gitd">
            {" "}
            <div id="gitc">
              <span>Get</span>
              <span>in</span>
              <span>touch</span>
            </div>
          </div>
          <div id="gita">
            <a href="">Email</a>
            <a href="">Linked In</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
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
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-2-s"
            onClick={() => showPicSmall("pic-2-s")}
            src="https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-3-s"
            onClick={() => showPicSmall("pic-3-s")}
            src="https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-4-s"
            onClick={() => showPicSmall("pic-4-s")}
            src="https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-5-s"
            onClick={() => showPicSmall("pic-5-s")}
            src="https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-6-s"
            onClick={() => showPicSmall("pic-6-s")}
            src="https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-7-s"
            onClick={() => showPicSmall("pic-7-s")}
            src="https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-8-s"
            onClick={() => showPicSmall("pic-8-s")}
            src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="image image-s"
            draggable="false"
          />
        </div>
        <div id="image-track-2" data-mouse-down-at="0" data-prev-percentage="0">
          <img
            id="pic-1-f"
            src="https://images.unsplash.com/photo-1701600713610-0f724c65168d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-2-f"
            src="https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-3-f"
            src="https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-4-f"
            src="https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-5-f"
            src="https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-6-f"
            src="https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-7-f"
            src="https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
          <img
            id="pic-8-f"
            src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="image image-f"
            draggable="false"
          />
        </div>
      </section>

      <section>
        <div id="tracker"></div>
        <div id="blur"></div>
      </section>
    </div>
  );
};

export default Landing;
