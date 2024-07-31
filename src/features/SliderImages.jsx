import { useImages } from "./useImages";
import { useEffect, useRef, useState } from "react";

function SliderImages() {
  const [scrollRight, setScrollRight] = useState(0);

  const { images } = useImages();

  const carousel = useRef(null);
  let screenWidth = useRef(0);

  let position = 0;

  const imagesShown = screenWidth?.current / 308;

  const pictureWidth = 330;

  function right() {
    position = scrollRight - pictureWidth;

    position = Math.max(
      position,
      -pictureWidth * (images?.length - imagesShown.toFixed(2))
    );

    setScrollRight(position);
  }

  function left() {
    position = scrollRight + pictureWidth;

    position = Math.min(position, 115);

    setScrollRight(position);
  }

  useEffect(
    function () {
      screenWidth.current = window.innerWidth;

      carousel.current.style.transform = `translateX(${scrollRight}px)`;
    },
    [scrollRight]
  );

  return (
    <div className="sliderContainer">
      <div className="playLeft" onClick={left}></div>
      <ul className="styledUl" ref={carousel}>
        {images?.map((image) => (
          <li key={image.id}>
            <img src={image.image} alt={`Image number ${image.id}`} />
          </li>
        ))}
      </ul>
      <div className="playRight" onClick={right}></div>
    </div>
  );
}

export default SliderImages;
