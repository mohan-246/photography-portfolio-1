import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

const Landing = () => {
  gsap.registerPlugin(Observer);
  Observer.create({
    target: window, // can be any element (selector text is fine)
    type: "wheel,touch", // comma-delimited list of what to listen for
    onUp: () => previous(),
    onDown: () => next(),
  });
  // window.onmousedown = e =>{
  //     track.dataset.mouseDownAt = e.clientX
  // }
  // window.onmousemove = e =>{
  //     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX , maxDelta = window.innerWidth / 2
  //     const percentage = (mouseDelta / maxDelta) * 100
  //     track.style.transform = `translate (${percentage}% , - 50%)`
  // }
  function previous(){

  }
  function next(){

  }
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
          parseFloat(parseInt(track.dataset.mouseDownAt)) - e.clientX,
        maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );
      track.dataset.percentage = nextPercentage;
      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1000, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, []);

  return (
    <div
      id="image-track"
      className="flex gap-[4vmin] absolute left-[40%] bg-[#141414] top-[50%] translate-y-[-50%]"
      data-mouse-down-at="0"
      data-prev-percentage="0"
    >
      <img
        src="/DSC_0315.jpg"
        alt=""
        className="w-[35vmin] h-[56vmin] object-cover object-right image select-none"
        draggable="false"
      />
      <img
        src="/DSC_0320-2.jpg"
        alt=""
        className="w-[35vmin] h-[56vmin] object-cover  object-right image select-none"
        draggable="false"
      />
      <img
        src="/DSC_0338.jpg"
        alt=""
        className="w-[35vmin] h-[56vmin] object-cover  object-right image select-none"
        draggable="false"
      />
      <img
        src="/DSC_0441.jpg"
        alt=""
        className="w-[35vmin] h-[56vmin] object-cover  object-right image select-none"
        draggable="false"
      />
      <img
        src="/fg 1.jpg"
        alt=""
        className="w-[35vmin] h-[56vmin] object-cover  object-right image select-none"
        draggable="false"
      />
      <img
        src="/sky.jpeg"
        alt=""
        className="w-[35vmin] h-[56vmin] object-cover  object-right image select-none"
        draggable="false"
      />
    </div>
  );
};

export default Landing;
