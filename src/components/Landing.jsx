import { useEffect, useState } from "react";
import gsap,{ Power4 , Bounce } from "gsap";
import { Observer } from "gsap/all";
const Landing = () => {
  gsap.registerPlugin(Observer);
  const [curNav, setCurNav] = useState("work");
  const [count, setCount] = useState(1);
  useEffect(() => {
    const track = document.getElementById("image-track");
    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };
    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;
      const mouseDelta =
        parseFloat(parseInt(track.dataset.mouseDownAt)) - e.clientX;
      const maxDelta = window.innerWidth * 1.5;
      const percentage = (mouseDelta / maxDelta) * -90;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -90
      );
      const countpercentage = (nextPercentage / 90) * 176;
      switch (true) {
        case countpercentage <= 0 && countpercentage > -11:
          gsap.to('#count',{y: -20 , duration: 1 , ease : Power4.easeIn})
          break;

        case countpercentage < -11 && countpercentage > -33:
          setCount(2);
          break;

        case countpercentage < -33 && countpercentage > -55:
          setCount(3);
          break;

        case countpercentage < -55 && countpercentage > -77:
          setCount(4);
          break;

        case countpercentage < -77 && countpercentage > -99:
          setCount(5);
          break;

        case countpercentage < -99 && countpercentage > -121:
          setCount(6);
          break;

        case countpercentage < -121 && countpercentage > -143:
          setCount(7);
          break;

        case countpercentage < -143 && countpercentage > -165:
          setCount(8);
          break;

        case countpercentage < -165 && countpercentage >= -176:
          setCount(9);
          break;

        default:
          setCount(1);
      }

      track.dataset.percentage = nextPercentage;
      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1300, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1500, fill: "forwards" }
        );
      }
    };
    const handleOnScroll = (e) => {
      const totalHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const maxScrollY = totalHeight - window.innerHeight;
      const currentY = window.scrollY;
      const percentage = (currentY / maxScrollY) * -90;
      const nextPercentageUnconstrained = percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -90
      );
      console.log(nextPercentage);

      const countpercentage = (nextPercentage / 90) * 176;
      console.log(track.dataset.percentage , nextPercentage)
      // const  y1 = document.getElementById(1).getBoundingClientRect().top
      // const  y2 = document.getElementById(2).getBoundingClientRect().top
      // const  y3 = document.getElementById(3).getBoundingClientRect().top
      // const  y4 = document.getElementById(4).getBoundingClientRect().top
      // const  y5 = document.getElementById(5).getBoundingClientRect().top
      // const  y6 = document.getElementById(6).getBoundingClientRect().top
      // const  y7 = document.getElementById(7).getBoundingClientRect().top
      // const  y8 = document.getElementById(8).getBoundingClientRect().top
      // const  y9 = document.getElementById(9).getBoundingClientRect().top
      switch (true) {
        case countpercentage <= 0 && countpercentage > -11:
           gsap.to('#count', { y: 19, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -11 && countpercentage > -33:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -10, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -10, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -33 && countpercentage > -55:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -36, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -36, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -55 && countpercentage > -77:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -64, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -64, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -77 && countpercentage > -99:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -90, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -90, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -99 && countpercentage > -121:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -120, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -120, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -121 && countpercentage > -143:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -146, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -146, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -143 && countpercentage > -165:
          track.dataset.percentage < nextPercentage ? gsap.to('#count', { y: -174, duration: 0.2, ease: Bounce.easeOut }): gsap.to('#count', { y: -174, duration: 0.5, ease: Bounce.easeOut })
          break;

        case countpercentage < -165 && countpercentage >= -176:
          gsap.to('#count', { y: -200, duration: 0.5, ease: Bounce.easeOut })
          break;

        default:
          gsap.to('#count', { y: 0, duration: 0.2, ease: Bounce.easeOut })
      }

      track.dataset.percentage = nextPercentage;
      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1300, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1500, fill: "forwards" }
        );
      }
      track.dataset.prevPercentage = percentage;
    };
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
    window.onscroll = (e) => handleOnScroll(e);
    window.onscrollend = (e) => handleOnUp(e);
  }, []);
  useEffect(() => {
    const work = document.getElementById("work");
    const about = document.getElementById("about");
    curNav == "work"
      ? ((work.style.color = "whitesmoke"), (about.style.color = "gray"))
      : ((about.style.color = "whitesmoke"), (work.style.color = "gray"));
  }, [curNav]);
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
      <p className="plus">+</p>
      <p id="navbar">
        <span id="work" onClick={() => setCurNav("work")}>
          Work
        </span>{" "}
        <span
          id="about"
          onClick={() => {
            setCurNav("about");
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
        <p>{count}</p>
      </div>
      <p id="about-me">
        <span>
          {" "}
          Hello, I'm [Your Name], a passionate photographer based in [Your
          Location]. My journey in the world of photography began [X years ago],
          and since then, I've been capturing moments that tell unique stories
        </span>
        <br />
        <br />
        <span>
          My style is a blend of [describe your style, e.g., documentary,
          portrait, fine art] photography. I find inspiration in the beauty of
          everyday life, the play of light and shadow, and the genuine emotions
          that unfold in front of my lens. My goal is to create images that not
          only freeze moments in time but also evoke emotions and memories.
        </span>
        <br />
        <br />
        <span>
          Photography, for me, is more than just a profession; it's a way of
          life. Whether I'm photographing a heartfelt wedding, a vibrant street
          scene, or a serene landscape, I approach each project with a keen eye
          for detail and a commitment to excellence.
        </span>
        <br />
        <br />
        <span>
          I believe that every photo should tell a story. Through my lens, I
          strive to capture the essence of my subjects, the mood of the moment,
          and the unique atmosphere that surrounds each scene. I love
          collaborating with clients to understand their vision and bring it to
          life through my photography.
        </span>
        <br />
        <br />
        <span>
          In addition to my technical skills, I am dedicated to continuous
          learning and staying updated with the latest trends in photography.
          This commitment ensures that I can offer my clients not only timeless
          classics but also innovative and contemporary perspectives.
        </span>
        <br />
        <br />
        <span>
          When I'm not behind the camera, you'll find me [mention something
          personal, e.g., exploring new places, sipping coffee in cozy cafes, or
          experimenting with new photography techniques]. I believe that life is
          a beautiful adventure, and I'm grateful to document its various
          chapters through my photographs.
        </span>
        <br />
        <br />
        <span>
          Thank you for visiting my portfolio. I invite you to explore my work
          and get in touch for your upcoming photography needs. Let's create
          lasting memories together!
        </span>
      </p>
    </div>
  );
};

export default Landing;
