

// eslint-disable-next-line react/prop-types
const Work = ({isAnimating , showPic , pic1Source , pic2Source , pic3Source , pic4Source , pic5Source , pic6Source , pic7Source , pic8Source}) => {
  return (
    <section className="wrapper">
    <div
      id="image-track"
      className=""
      data-mouse-down-at="0"
      data-prev-percentage={0}
    >
      <img
        id="pic-1"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-1")}
        src={pic1Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-2"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-2")}
        src={pic2Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-3"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-3")}
        src={pic3Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-4"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-4")}
        src={pic4Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-5"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-5")}
        src={pic5Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-6"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-6")}
        src={pic6Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-7"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-7")}
        src={pic7Source}
        alt=""
        className="image"
        draggable="false"
      />
      <img
        id="pic-8"
        crossOrigin="anonymous"
        onClick={() => !isAnimating && showPic("pic-8")}
        src={pic8Source}
        alt=""
        className="image"
        draggable="false"
      />
    </div>
  </section>
  )
}

export default Work