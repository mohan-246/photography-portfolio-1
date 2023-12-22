import SmallTrack from "./SmallTrack";
import FakeTrack from "./FakeTrack";

// eslint-disable-next-line react/prop-types
const Tracks = ({ showPicSmall , pic1Source , pic2Source , pic3Source , pic4Source , pic5Source , pic6Source , pic7Source , pic8Source }) => {
  return (
    <section>
      <SmallTrack
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
      <FakeTrack
        pic1Source={pic1Source}
        pic2Source={pic2Source}
        pic3Source={pic3Source}
        pic4Source={pic4Source}
        pic5Source={pic5Source}
        pic6Source={pic6Source}
        pic7Source={pic7Source}
        pic8Source={pic8Source}
      />
    </section>
  );
};

export default Tracks;
