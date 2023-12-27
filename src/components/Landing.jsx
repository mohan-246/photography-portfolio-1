/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import gsap, { Power4, Power2 } from "gsap";
import { CustomEase } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/all";
import Work from "./Work";
import About from "./About";
import Tracks from "./Tracks";
import Frame from "./Frame";
import Tracker from "./Tracker";
import Navbar from "./Navbar";
import Plus from "./Plus";
import Counter from "./Counter";
import ConfirmOverlay from "./ConfirmOverlay";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Observer);
  gsap.registerPlugin(CustomEase);
const [showOverlay , setShowOverlay] = useState(false)
  let tl;
  //Content
  const [emailAddress, setEmailAddress] = useState("sample@gmail.com");
  const [navName, setNavName] = useState("Mohana krishnan");
  const [pic1Source, setPic1Source] = useState([
    "https://images.unsplash.com/photo-1701600713610-0f724c65168d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic2Source, setPic2Source] = useState([
    "https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic3Source, setPic3Source] = useState([
    "https://images.unsplash.com/photo-1701360476875-f7eebbe35591?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic4Source, setPic4Source] = useState([
    "https://images.unsplash.com/photo-1701143917332-4639dbfeaa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic5Source, setPic5Source] = useState([
    "https://images.unsplash.com/photo-1701141440914-1ce2f9e60a7f?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic6Source, setPic6Source] = useState([
    "https://images.unsplash.com/photo-1545221855-a9f94b4e3ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic7Source, setPic7Source] = useState([
    "https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [pic8Source, setPic8Source] = useState([
    "https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    null,
  ]);
  const [about1Paragraph, setAbout1Paragraph] = useState(
    "Hi I am Mohan, As a photographer I am dedicated to transforming ordinary moments into extraordinary memories."
  );
  const [about1ImageSource, setAbout1ImageSource] = useState(
    ["https://images.unsplash.com/photo-1526089571952-1b2803457035?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ,null]);
  const [about2ImageSource2, setAbout2ImageSource2] = useState(
    ["https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ,null]);
  const [about2HeadingText, setAbout2HeadingText] = useState(
    "My Lens, Your Story"
  );
  const [about2Paragraph, setAbout2Paragraph] = useState(
    "With a passion for capturing fleeting moments and transforming them into lasting memories, I embark on a visual journey, guided by the light and emotions that surround me. My photography transcends mere images, weaving together narratives that resonate with viewers on a deeper level. Whether it's the raw energy of a live performance, the quiet intimacy of a wedding, or the timeless beauty of a landscape, I strive to create images that reflect the essence of the subject and evoke a sense of connection."
  );
  const [about3Paragraph, setAbout3Paragraph] = useState(
    "If you are looking to discuss a project or just talk photography"
  );
  const [linkedInLink, setLinkedInLink] = useState("https://linkedin.com");
  const [instagramLink, setInstagramLink] = useState("https://instagram.com");
  const [twitterLink, setTwitterLink] = useState("https://twitter.com");

  const mailtoLink = `mailto:${emailAddress}`;
  const [loaded, setLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [curNav, setCurNav] = useState("work");
  const [selectedImage, setSelectedImage] = useState("null");
  const [prevImage, setPrevImage] = useState("null");
  const [nextImage, setNextImage] = useState("null");
  //Content
  useEffect(() => {
    if (!loaded) {
      const images = document.querySelectorAll("#image-track .image");
      const tlMain = gsap.timeline();
      tlMain
        .fromTo(
          images,
          {
            y: "-100vh",
          },
          {
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            opacity: 1,
            ease: Power4.easeOut,
          }
        )
        .fromTo(
          "#navbar",
          {
            y: "-100%",
          },
          {
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          "#plus",
          {
            scale: 0,
          },
          {
            scale: 1,
            opacity: 1,
          }
        )
        .fromTo(
          "#counter",
          {
            y: "100%",
          },
          {
            y: 0,
            opacity: 1,
          }
        );
      setLoaded(true);
    }
  }, [loaded]);
  function getNextAndPrev(currentValue) {
    const maxValue = 8; // Assuming the maximum value is 8
    const nextValue = (currentValue % maxValue) + 1;
    const prevValue = currentValue === 1 ? maxValue : currentValue - 1;

    return [nextValue, prevValue];
  }
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
      tracker.style.background = "white";
      tracker.style.animation = "rotate 20s linear";
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
      } else {
        Observer.getById("showPicObserver")?.kill();
        const id = selectedImage;
        const track = document.getElementById("image-track");
        const track2 = document.getElementById("image-track-2");
        const smallImage = document.getElementById(`${id}-s`);
        const smallImages = document.querySelectorAll(".image-s");
        tl?.add(tls);
        const pic = document.getElementById(id);
        const tls = gsap.timeline({ paused: true });
        const pics = gsap.utils.toArray("#image-track .image");
        const newImage = document.getElementById(`${id}-f`);
        document.body.scrollTo({ top: 0, behavior: "auto" });
        track.dataset.prevPercentage = 0;
        tls
          .to(
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
            "#pic-frame",
            {
              opacity: 0,
              duration: 0.6,
            },
            0
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
            [smallImage, smallImages],
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
                gsap.to(
                  [".image-f", newImage],
                  {
                    height: "55vmin",
                    width: "35vmin",
                    opacity: 0,
                    duration: 0,
                    position: pic.style.position,
                  },
                  0
                );
              },
              duration: 1,
            },
            0
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
            type: "wheel,touch,pointer",
            wheelSpeed: 0.1,
            tolerance: 10,
            onChangeY: (e) => {
              if (!(e.event instanceof PointerEvent && !isAnimating)) {
                ScrollObserver.disable();
                setIsAnimating(true);
                tls.play();
                setTimeout(() => {
                  setSelectedImage("null");
                  setPrevImage("null");
                  setNextImage("null");
                  ScrollObserver.kill();
                }, 2000);
                setTimeout(() => {
                  setIsAnimating(false);
                }, 3500);
              }
            },
            onClick: (e) => {
              const curimage = document.getElementById(`${selectedImage}-f`);
              const nextimage = document.getElementById(`${nextImage}-f`);
              const previmage = document.getElementById(`${prevImage}-f`);
              const match = selectedImage.match(/(\d+)$/);
              const numericValue = match ? parseFloat(match[1]) : 0;
              const [nextValue, prevValue] = getNextAndPrev(numericValue);
              // eslint-disable-next-line no-unused-vars
              const [nextnextValue, nextprevValue] = getNextAndPrev(nextValue);
              const [prevnextValue, prevprevValue] = getNextAndPrev(prevValue);
              const tll = gsap.timeline();
              tll.clear();
              if (curNav == "work") {
                if (e.x > window.innerWidth / 2) {
                  pic.style.opacity = 1;
                  smallImage.style.opacity = 0;
                  nextimage.className = ".image";
                  nextimage.dataset.isonscreen = "true";
                  curimage.dataset.isonscreen = "false";
                  const countValue = numericValue == 8 ? 0 : numericValue;
                  const frameValue = numericValue == 8 ? 0 : numericValue;
                  setPrevImage(`pic-${numericValue}`);
                  setSelectedImage(`pic-${nextValue}`);
                  setNextImage(`pic-${nextnextValue}`);
                  tll
                    .to(
                      curimage,
                      {
                        left: "-107.5vw",
                        width: "105vw",
                        objectPosition: "center center",
                        duration: 1.6,
                        objectFit: "cover",
                        onComplete: () => {
                          if (curimage.dataset.isonscreen == "false") {
                            curimage.classList.add("image-f");
                          }
                          gsap.to(curimage, {
                            left: "-100vw",
                            opacity: 0,
                            duration: 0,
                          });
                        },
                        ease: Power4.easeOut,
                      },
                      0
                    )
                    .fromTo(
                      nextimage,
                      {
                        width: "100vw",
                        left: "102.5vw",
                        objectFit: "cover",
                        top: 0,
                      },
                      {
                        opacity: 1,
                        left: "-2.5vw",
                        width: "105vw",
                        top: "-2.5vh",
                        height: "105vh",
                        objectFit: "cover",
                        duration: 1.6,
                        ease: Power4.easeOut,
                      },
                      0
                    )
                    .to(
                      "#count",
                      {
                        y: -window.innerWidth * countValue * 0.01,
                        duration: 0.8,
                        ease: Power4.easeOut,
                      },
                      0
                    )
                    .to(
                      "#pic-frame",
                      {
                        left: `${68 + frameValue * 3.4}vw`,
                        duration: 0.8,
                        ease: Power4.easeOut,
                      },
                      0
                    );
                } else if (e?.x <= window.innerWidth / 2) {
                  pic.style.opacity = 1;
                  smallImage.style.opacity = 0;
                  previmage.className = ".image";
                  previmage.dataset.isonscreen = "true";
                  curimage.dataset.isonscreen = "false";
                  const countValue = prevValue == 1 ? 0 : prevValue - 1;
                  const frameValue = prevValue == 1 ? 0 : prevValue - 1;
                  setPrevImage(`pic-${prevprevValue}`);
                  setSelectedImage(`pic-${prevValue}`);
                  setNextImage(`pic-${numericValue}`);

                  tll
                    .to(
                      curimage,
                      {
                        left: "102.5vw",
                        width: "105vw",
                        duration: 1.6,
                        objectFit: "cover",
                        ease: Power4.easeOut,
                        onComplete: () => {
                          if (curimage.dataset.isonscreen == "false") {
                            console.log("element not ");
                            curimage.classList.add("image-f");
                          }
                          gsap.to(curimage, {
                            left: "190vw",
                            opacity: 0,
                            duration: 0,
                          });
                        },
                      },
                      0
                    )
                    .fromTo(
                      previmage,
                      {
                        left: "-107.5vw",
                        width: "105vw",
                        opacity: 1,
                        top: 0,
                      },
                      {
                        opacity: 1,
                        left: "-2.5vw",
                        width: "105vw",
                        height: "105vh",
                        top: "-2.5vh",
                        duration: 1.6,
                        ease: Power4.easeOut,
                      },
                      0
                    )
                    .to(
                      "#count",
                      {
                        y: -window.innerWidth * countValue * 0.01,
                        duration: 0.8,
                        ease: Power4.easeOut,
                      },
                      0
                    )
                    .to(
                      "#pic-frame",
                      {
                        left: `${68 + frameValue * 3.4}vw`,
                        duration: 0.8,
                        ease: Power4.easeOut,
                      },
                      0
                    );
                }
              }
            },
          });
        }, 300);
      }
    } else {
      about.style.color = "whitesmoke";
      document.body.style.overflowY = "hidden";
      about.style.opacity = "1";
      work.style.color = "gray";
      tracker.style.background =
        "linear-gradient(to right, aquamarine, mediumpurple)";
      tracker.style.translate = "0% 0%";
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
        }, index++ * (interval / 9));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curNav, selectedImage]);

  function showAbout() {
    Observer.getById("showPicObserver")?.disable();
    tl?.add(tla);
    const tla = gsap.timeline();
    const images = gsap.utils.toArray(".image:not(.image-f, .image-s)");
    const track = document.getElementById("image-track");
    const track2 = document.getElementById("image-track-2");
    const trackS = document.getElementById("image-track-small");
    track.style.zIndex = -10;
    track2.style.zIndex = -11;
    trackS.style.zIndex = -9;
    const fakeImage = document.getElementById(`${selectedImage}-f`);
    if (selectedImage != "null") {
      document.getElementById(selectedImage).style.opacity = 1;
      document.getElementById(`${selectedImage}-s`).style.opacity = 0;
    }
    tla
      .to(
        "#tracker",
        {
          opacity: 0,
          background: "linear-gradient(to right, aquamarine, mediumpurple)",
          duration: 0.5,
          ease: Power4.easeIn,
        },
        0
      )
      .to(
        "#blur",
        {
          filter: "blur(7vmax)",
          duration: 0.1,
        },
        0.5
      )
      .to(
        "#tracker",
        {
          height: "20vmax",
          zIndex: -101,
          duration: 0.1,
        },
        0.5
      )
      .to(
        "#tracker",
        {
          opacity: 1,
        },
        0.7
      )
      .to(
        "#plus",
        {
          scale: 0,
          duration: 0.6,
          ease: Power2.easeIn,
        },
        0
      )
      .to(
        fakeImage,
        {
          top: "-110vh",
          duration: 0.8,
          ease: Power2.easeIn,
        },
        0
      )
      .to(
        [images],
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
          },
        },

        0.4
      )
      .to(
        "#about-me",
        {
          opacity: 1,
          duration: 0.8,
          ease: Power2.easeOut,
        },
        1.4
      )
      .to(
        "#pic-frame",
        {
          opacity: 0,
          duration: 0.6,
        },
        0
      );
  }
  function showWork() {
    Observer.getById("showPicObserver")?.enable();
    tl?.add(tlw);
    const tlw = gsap.timeline();
    const track = document.getElementById("image-track");
    const track2 = document.getElementById("image-track-2");
    const trackS = document.getElementById("image-track-small");
    trackS.style.zIndex = 99;
    track.style.zIndex = 5;
    track2.style.zIndex = 4;
    const images = gsap.utils.toArray(".image:not(.image-s , .image-f");
    const fakeImage = document.getElementById(`${selectedImage}-f`);
    tlw
      .to(
        "#tracker",
        {
          background: "white",
          height: "3vmin",
          zIndex: 999,
          duration: 1,
          ease: Power4.easeIn,
        },
        0
      )
      .to(
        fakeImage,
        {
          top: "-2.5vh",
          duration: 0.8,
          ease: Power4.easeIn,
        },
        1.6
      )
      .to(
        "#blur",
        {
          filter: "blur(0vmax)",
          ease: Power4.easeIn,
          duration: 1,
        },
        0
      )
      .to(
        "#about-me",
        {
          duration: 0.6,
          opacity: 0,
          ease: Power4.easeOut,
        },
        1
      )
      .to(
        "#plus",
        {
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
        },
        1.6
      )
      .to(
        images,
        {
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: Power2.easeOut,
          onComplete: () => {
            if (selectedImage !== "null") {
              gsap.to(
                "#pic-frame",
                {
                  opacity: 1,
                  duration: 0.6,
                },
                1.6
              );
            }
          },
        },
        1.6
      )
      .to(
        "#counter",
        {
          y: 0,
          duration: 0.8,
          ease: Power2.easeOut,
        },
        1.6
      );
  }
  function scrollToTop(y) {
    window.scrollTo({
      top: y,
      behavior: "auto", // You can use "auto" or "smooth" for scrolling behavior
    });
  }
  function showPicSmall(id) {
    console.log("S", id);
  }
  function showPic(id) {
    setSelectedImage(id);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1600);
    const track = document.getElementById("image-track");
    const smallImage = document.getElementById(`${id}-s`);
    const track2 = document.getElementById("image-track-2");
    const pic = document.getElementById(id);
    tl?.add(tlp);
    const tlp = gsap.timeline();
    const pics = gsap.utils.toArray("#image-track .image");
    const newImage = document.getElementById(`${id}-f`);
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
    newImage.className = pic.className;
    newImage.style.objectPosition = pic.style.objectPosition;
    const match = id.match(/(\d+)$/);
    const numericValue = match ? parseFloat(match[1]) : 0;
    const [nextimage, previmage] = getNextAndPrev(numericValue);
    const frameValue = numericValue - 1;
    setPrevImage(`pic-${previmage}`);
    setNextImage(`pic-${nextimage}`);
    tlp
      .to(
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
        {
          y: 0,
          duration: 0.6,
          opacity: 1,
          ease: Power4.easeOut,
          onComplete: () => {
            gsap.to(pic, {
              opacity: 1,
              duration: 0,
            });
            gsap.to(smallImage, {
              opacity: 0,
              duration: 0,
            });
          },
        },
        0.8
      )
      .fromTo(
        "#pic-frame",
        {
          y: "5vh",
          opacity: 0,
          left: `${68 + frameValue * 3.4}vw`,
        },
        {
          y: 0,
          duration: 0.6,
          opacity: 1,
          left: `${68 + frameValue * 3.4}vw`,
          ease: Power4.easeOut,
        },
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
          width: "105vw",
          height: "105vh",
          top: "-2.5vh",
          left: "-2.5vw",
          duration: 1.8,
          ease: Power4.easeOut,
          // onComplete: () => newImage.classList.add("image-f")
        },
        0
      )
      .to(
        ".image-f",
        {
          width: "105vw",
          height: "105vh",
          position: "fixed",
          left: "190vw",
          duration: 0,
          opacity: 1,
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
          y: -window.innerWidth * (numericValue - 1) * 0.01,
          duration: 0.8,
          ease: Power2.easeOut,
        },
        0
      );
  }
  function host() {
    
    const formData = new FormData();
    formData.append("variant", "Photography-Portfolio-1")
    formData.append("emailAddress", emailAddress);
    formData.append("navName", navName);
    formData.append("file", pic1Source[1]); // Assuming pic1Source is an array [URL, File]
    formData.append("file", pic2Source[1]);
    formData.append("file", pic3Source[1]);
    formData.append("file", pic4Source[1]);
    formData.append("file", pic5Source[1]);
    formData.append("file", pic6Source[1]);
    formData.append("file", pic7Source[1]);
    formData.append("file", pic8Source[1]);
    formData.append("about1Paragraph", about1Paragraph);
    formData.append("file", about1ImageSource[1]);
    formData.append("file", about2ImageSource2[1]);
    formData.append("about2HeadingText", about2HeadingText);
    formData.append("about2Paragraph", about2Paragraph);
    formData.append("about3Paragraph", about3Paragraph);
    formData.append("linkedInLink", linkedInLink);
    formData.append("instagramLink", instagramLink);
    formData.append("twitterLink", twitterLink);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      
      .catch((error) => console.error("Error:", error));
  }

  return (
    <section>
      <Work
        isAnimating={isAnimating}
        showPic={showPic}
        pic1Source={pic1Source}
        setPic1Source={setPic1Source}
        pic2Source={pic2Source}
        setPic2Source={setPic2Source}
        pic3Source={pic3Source}
        setPic3Source={setPic3Source}
        pic4Source={pic4Source}
        setPic4Source={setPic4Source}
        pic5Source={pic5Source}
        setPic5Source={setPic5Source}
        pic6Source={pic6Source}
        setPic6Source={setPic6Source}
        pic7Source={pic7Source}
        setPic7Source={setPic7Source}
        pic8Source={pic8Source}
        setPic8Source={setPic8Source}
      />
      <Plus />
      <Navbar
        navName={navName}
        setNavName={setNavName}
        setCurNav={setCurNav}
        showAbout={showAbout}
        showWork={showWork}
        curNav={curNav}
        selectedImage={selectedImage}
        setShowOverlay={setShowOverlay}
      />
      <Counter />
      <About
        setEmailAddress={setEmailAddress}
        emailAddress={emailAddress}
        mailtoLink={mailtoLink}
        about1Paragraph={about1Paragraph}
        setAbout1Paragraph={setAbout1Paragraph}
        about1ImageSource={about1ImageSource}
        setAbout1ImageSource={setAbout1ImageSource}
        about2ImageSource2={about2ImageSource2}
        setAbout2ImageSource2={setAbout2ImageSource2}
        about2HeadingText={about2HeadingText}
        setAbout2HeadingText={setAbout2HeadingText}
        about2Paragraph={about2Paragraph}
        setAbout2Paragraph={setAbout2Paragraph}
        about3Paragraph={about3Paragraph}
        setAbout3Paragraph={setAbout3Paragraph}
        linkedInLink={linkedInLink}
        setLinkedInLink={setLinkedInLink}
        instagramLink={instagramLink}
        setInstagramLink={setInstagramLink}
        twitterLink={twitterLink}
        setTwitterLink={setTwitterLink}
      />
      <Tracks
        showPicSmall={showPicSmall}
        pic1Source={pic1Source}
        pic2Source={pic2Source}
        pic3Source={pic3Source}
        pic4Source={pic4Source}
        pic5Source={pic5Source}
        pic6Source={pic6Source}
        pic7Source={pic7Source}
        pic8Source={pic8Source}
      />
      { showOverlay && <ConfirmOverlay setShowOverlay={setShowOverlay} host={host} />}
      <Frame />
      <Tracker />
    </section>
  );
};

export default Landing;
