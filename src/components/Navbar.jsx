import gsap from "gsap";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({setCurNav , showAbout , showWork , selectedImage , curNav , navName}) => {
  useEffect(() => {
    const tracker = document.getElementById("tracker");
    const blob = document.getElementById("gitc");
    const blur = document.getElementById("blur");
    const trackerIcon = document.getElementById("tracker-icon");
    const frame = document.getElementById("pic-frame");
    const validIdsSet = new Set([
      "pic-1",
      "pic-2",
      "pic-3",
      "pic-4",
      "pic-5",
      "pic-6",
      "pic-7",
      "pic-8",
    ]);
    const selectedPic = document.getElementById(`${selectedImage}-f`);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    window.onpointermove = (event) => {
      const { clientX, clientY } = event;
      tracker.animate(
        {
          left: `${clientX - tracker.offsetWidth / 2}px`,
          top: `${clientY - tracker.offsetHeight / 2}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
      if (curNav == "about") {
        trackerIcon.animate(
          {
            opacity: 0,
          },
          {
            duration: 500,
            fill: "forwards",
          }
        );
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

        blur.style.backdropFilter = "blur(7vmax)";

        tracker.style.animation = "rotate 20s infinite";
        tracker.animate(
          {
            zIndex: -101,
          },
          {
            duration: 100,
            fill: "forwards",
          }
        );
        setTimeout(() => {
          tracker.animate(
            {
              height: "20vmax",
            },
            {
              duration: 1000,
              fill: "forwards",
            }
          );
        }, 1000);
      } else {
        blur.style.backdropFilter = "blur(0vmax)";
        tracker.style.animation = "";
        tracker.animate(
          { height: "3vmin", zIndex: 999 },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
        if (selectedImage == "null") {
          if (frame.style.opacity == 1) {
            frame.animate(
              {
                opacity: 0,
              },
              {
                duration: 600,
                fill: "forwards",
              }
            );
          }
          trackerIcon.className = "fa-solid fa-arrow-right-long";
          if (validIdsSet.has(event.target.id)) {
            gsap.to(trackerIcon, {
              rotate: -45,
            });
            tracker.animate(
              {
                scale: 1.5,
              },
              {
                duration: 500,
                fill: "forwards",
              }
            );
            trackerIcon.animate(
              {
                opacity: 1,
              },
              {
                duration: 500,
                fill: "forwards",
              }
            );
          } else {
            gsap.to(trackerIcon, {
              rotate: 0,
            });
            tracker.animate(
              {
                scale: 1,
              },
              {
                duration: 500,
                fill: "forwards",
              }
            );
            trackerIcon.animate(
              {
                opacity: 0,
              },
              {
                duration: 500,
                fill: "forwards",
              }
            );
          }
        } else {
          const distanceX = (clientX - centerX) / window.innerWidth;
          const distanceY = (clientY - centerY) / window.innerHeight;

          gsap.to(trackerIcon, {
            rotate: 0,
            opacity: 1,
          });
          if (clientX < window.innerWidth / 2) {
            trackerIcon.className = "fa-solid fa-arrow-left";
          } else {
            trackerIcon.className = "fa-solid fa-arrow-right";
          }
          // Use distance values in the translate function
          const transformValue = `translate(${distanceX * 2.5}%, ${
            distanceY * 2.5
          }%)`;
          tracker.animate(
            {
              scale: 1,
            },
            {
              duration: 500,
              fill: "forwards",
            }
          );
          selectedPic.animate(
            {
              transform: transformValue,
            },
            {
              duration: 1500,
              easing: "ease-out",
              fill: "forwards",
            }
          );
        }
      }
    };
  }, [curNav, selectedImage]);
  
  return (
    <div id="navbar">
    <p id="nav-name">{navName}</p>
    <p id="nav-pages"><span
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
        </span></p>
        
      </div>
  )
}

export default Navbar