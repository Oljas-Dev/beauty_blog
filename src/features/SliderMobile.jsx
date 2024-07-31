import { useEffect, useRef, useState } from "react";
import { useImages } from "./useImages";

function SliderMobile() {
  const [scrolling, setScrolling] = useState(0);
  const [test, setTest] = useState(false);

  const { images } = useImages();

  const image = images?.at(scrolling);
  const imagePrev = images?.at(scrolling - 1);
  const imageNext = images?.at(scrolling + 1);

  const imgPrev = useRef(null);
  const imgNext = useRef(null);
  const imgCenter = useRef(null);

  function handleLeft() {
    if (scrolling > 0) setScrolling((s) => s - 1);
  }

  function handleRight() {
    if (scrolling < images.length - 1) {
      setScrolling((s) => s + 1);
    }
  }

  useEffect(
    function () {
      if (scrolling === 0) {
        imgPrev.current.style.visibility = "hidden";
      } else {
        imgPrev.current.style.visibility = "visible";
      }

      if (scrolling === images?.length - 1) {
        imgNext.current.style.visibility = "hidden";
        setTest(true);
      } else {
        imgNext.current.style.visibility = "visible";
        setTest(false);
      }

      if (test) {
        imgCenter.current.style.marginRight = "14rem";
      } else {
        imgCenter.current.style.marginRight = "0";
      }
    },
    [scrolling, images?.length, test, setTest]
  );

  return (
    <div className="mobileSliderContainer">
      <div className="playLeft" onClick={handleLeft}></div>

      <div className="mobileSlider">
        <img
          src={imagePrev?.image}
          alt={`Image number ${image?.id}`}
          className="imagePrev"
          ref={imgPrev}
          id={image?.id}
        />

        <img
          src={image?.image}
          ref={imgCenter}
          alt={`Image number ${image?.id}`}
        />

        <img
          src={imageNext?.image}
          alt={`Image number ${image?.id}`}
          className="imageNext"
          ref={imgNext}
        />
      </div>

      <div className="playRight" onClick={handleRight}></div>
    </div>
  );
}

export default SliderMobile;
