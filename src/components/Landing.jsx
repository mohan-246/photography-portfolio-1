import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
const Landing = () => {
  gsap.registerPlugin(Observer);

  useEffect(() => {
    const track = document.getElementById("image-track");
    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };
    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;
      const mouseDelta = parseFloat(parseInt(track.dataset.mouseDownAt)) - e.clientX
      const  maxDelta = window.innerWidth * 1.5;
      const percentage = (mouseDelta / maxDelta) * -100
      const  nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage
      const nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -90
        );
      track.dataset.percentage = nextPercentage;
      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1500, fill: "forwards" }
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
    const handleOnScroll = (e) =>{
      const totalHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const maxScrollY = (totalHeight - window.innerHeight);
      const currentY = window.scrollY;
      const percentage = (currentY / maxScrollY) * -90
      const nextPercentageUnconstrained =  percentage
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -90) 
      track.dataset.percentage = nextPercentage;
      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1500, fill: "forwards" }
      );
  
      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1500, fill: "forwards" }
        );
      }
      track.dataset.prevPercentage = percentage
    }
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
    window.onscroll =(e) => handleOnScroll(e)
    window.onscrollend= (e) => handleOnUp(e)
  }, []);
  
  return (
    <div className="wrapper">
      <div
        id="image-track"
        className=""
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <img src="/DSC_0315.jpg" alt="" className="image" draggable="false" />
        <img src="/DSC_0320-2.jpg" alt="" className="image" draggable="false" />
        <img src="/DSC_0338.jpg" alt="" className="image" draggable="false" />
        <img src="/DSC_0441.jpg" alt="" className="image" draggable="false" />
        <img src="/fg 1.jpg" alt="" className="image" draggable="false" />
        <img src="/sky.jpeg" alt="" className="image" draggable="false" />
        <img src="/tower.jpg" alt="" className="image" draggable="false" />
        <img src="/house.jpg" alt="" className="image" draggable="false" />
        <img src="/estate.jpg" alt="" className="image" draggable="false" />
      </div>
    </div>
  );
};

export default Landing;
