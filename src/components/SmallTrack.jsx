// eslint-disable-next-line react/prop-types
const SmallTrack = ({showPicSmall  , pic1Source , pic2Source , pic3Source , pic4Source , pic5Source , pic6Source , pic7Source , pic8Source}) => {
  return (
    <div
          id="image-track-small"
          className=""
          data-mouse-down-at="0"
          data-prev-percentage="0"
        >
          <img
            id="pic-1-s"
            onClick={() => showPicSmall("pic-1-s")}
            src={pic1Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-2-s"
            onClick={() => showPicSmall("pic-2-s")}
            src={pic2Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-3-s"
            onClick={() => showPicSmall("pic-3-s")}
            src={pic3Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-4-s"
            onClick={() => showPicSmall("pic-4-s")}
            src={pic4Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-5-s"
            onClick={() => showPicSmall("pic-5-s")}
            src={pic5Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-6-s"
            onClick={() => showPicSmall("pic-6-s")}
            src={pic6Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-7-s"
            onClick={() => showPicSmall("pic-7-s")}
            src={pic7Source}            alt=""
            className="image image-s"
            draggable="false"
          />
          <img
            id="pic-8-s"
            onClick={() => showPicSmall("pic-8-s")}
            src={pic8Source}            alt=""
            className="image image-s"
            draggable="false"
          />
        </div>
  )
}

export default SmallTrack