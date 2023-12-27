// eslint-disable-next-line react/prop-types
const Work = ({
  isAnimating,
  showPic,
  pic1Source,
  pic2Source,
  pic3Source,
  pic4Source,
  pic5Source,
  pic6Source,
  pic7Source,
  pic8Source,
  setPic1Source,
  setPic2Source,
  setPic3Source,
  setPic4Source,
  setPic5Source,
  setPic6Source,
  setPic7Source,
  setPic8Source,
}) => {
  function addInput(setImageSource) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/";
    fileInput.id = "dynamicFileInput";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function (e) {
      handleImageChange(e, setImageSource);
      document.body.removeChild(fileInput);
    });

    fileInput.click();
  }
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage([URL.createObjectURL(file),file]);
    }
  };
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
          onClick={() => addInput(setPic1Source)}
          src={pic1Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-2"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic2Source)}
          src={pic2Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-3"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic3Source)}
          src={pic3Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-4"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic4Source)}
          src={pic4Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-5"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic5Source)}
          src={pic5Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-6"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic6Source)}
          src={pic6Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-7"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic7Source)}
          src={pic7Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
        <img
          id="pic-8"
          crossOrigin="anonymous"
          onClick={() => addInput(setPic8Source)}
          src={pic8Source[0]}
          alt=""
          className="image"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Work;
