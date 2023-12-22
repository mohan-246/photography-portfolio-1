/* eslint-disable react/prop-types */
const FakeTrack = ({
  pic1Source,
  pic2Source,
  pic3Source,
  pic4Source,
  pic5Source,
  pic6Source,
  pic7Source,
  pic8Source,
}) => {
  return (
    <div id="image-track-2" data-mouse-down-at="0" data-prev-percentage="0">
      <img
        id="pic-1-f"
        data-isonscreen="false"
        src={pic1Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-2-f"
        data-isonscreen="false"
        src={pic2Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-3-f"
        data-isonscreen="false"
        src={pic3Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-4-f"
        data-isonscreen="false"
        src={pic4Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-5-f"
        data-isonscreen="false"
        src={pic5Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-6-f"
        data-isonscreen="false"
        src={pic6Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-7-f"
        data-isonscreen="false"
        src={pic7Source}
        className="image image-f"
        draggable="false"
      />
      <img
        id="pic-8-f"
        data-isonscreen="false"
        src={pic8Source}
        className="image image-f"
        draggable="false"
      />
    </div>
  );
};

export default FakeTrack;
