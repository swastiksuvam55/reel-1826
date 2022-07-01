import React, { useRef, useState } from "react";

export default function HomePage() {
  const imageRef = useRef(null);
  const [changeCol, setchangeCol] = useState(false);

  const onScrollMethod = (e) => {
    if (e.target.scrollTop >= imageRef.current.clientHeight * 0.23) {
      if (!changeCol) setchangeCol(true);
    } else {
      if (changeCol) setchangeCol(false);
    }
  };

  const roadMap = () => {
    console.log(imageRef);
    document.getElementById("divElem").scrollTop =
      imageRef.current.clientHeight * 0.25;
    // setchangeCol(true);
  };
  const onClickStudio = () => {
    document.getElementById("divElem").scrollTop = 0;
    // setchangeCol(false);
  };

  return (
    <div className="home-page">
      <div className="nav-bar row">
        <p
          onClick={onClickStudio}
          className={changeCol ? "pointer" : "pointer white-bg"}
        >
          Studio
        </p>
        <p
          className={changeCol ? "pointer white-bg" : "pointer"}
          onClick={roadMap}
        >
          Roadmap
        </p>
      </div>
      <div className="body">
        <div className="title-parent">
          <p>
            REEL
            <br />
            1826
          </p>
        </div>

        <div className="image-parent" id="divElem" onScroll={onScrollMethod}>
          <img src="/reel.png" className="image" ref={imageRef} />
        </div>
      </div>
    </div>
  );
}
