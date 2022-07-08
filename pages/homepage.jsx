import React, { useRef, useState, useEffect } from "react";

export default function HomePage() {
  const imageRef = useRef(null);
  const [changeCol, setchangeCol] = useState(false);
  const [showHome, setshowHome] = useState(false);
  const [startGame, setstartGame] = useState(false);
  const [imageIndex, setimageIndex] = useState(0);
  const [captureIndex, setcaptureIndex] = useState(null);
  const [isCaptured, setisCaptured] = useState(false);
  const [targetIndex, settargetIndex] = useState(null);
  const [errorMsg, seterrorMsg] = useState(null);

  const slideImage = [
    {
      src: "/animals/bird32.png",
      range: [3700, 3780],
      range2: [1770, 1780],
      name: "bird32",
    },
    {
      src: "/animals/bird42.png",
      range: [2250, 4000],
      range2: [280, 310],
      name: "bird42",
    },
    {
      src: "/animals/chital.png",
      range: [600, 800],
      name: "chital",
    },
    {
      src: "/animals/Cliff.png",
      range: [1000, 1200],
      name: "Cliff",
    },
    {
      src: "/animals/elephant.png",
      range: [2200, 2400],
      name: "elephant",
    },
    {
      src: "/animals/Layla.png",
      range: [3000, 3200],
      name: "Layla",
    },
    {
      src: "/animals/lionking.png",
      range: [3700, 3900],
      name: "lionking",
    },
    {
      src: "/animals/Nessa.png",
      name: "Nessa",
    },
    {
      src: "/animals/Rajah.png",
      name: "Rajah",
    },
    {
      src: "/animals/reddeer.png",
      name: "reddeer",
    },
    // {
    //   src: "/animals/Zola.png",
    // },
  ];

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setimageIndex((prevTime) => (prevTime >= 9 ? 0 : prevTime + 1)); // <-- Change this line!
    }, 500);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (errorMsg === "Wrong") {
      setTimeout(() => {
        seterrorMsg(null);
        setisCaptured(false);
      }, 1000);
    } else if (errorMsg === "Correct") {
      setTimeout(() => {
        seterrorMsg(null);
        setisCaptured(false);
        setshowHome(true);
      }, 1000);
    }
  }, [errorMsg]);

  const createGame = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    settargetIndex(randomNumber);
    setcaptureIndex(null);
    setisCaptured(false);
  };

  const checkAnswer = () => {
    setcaptureIndex(imageIndex);
    setisCaptured(true);
    if (targetIndex === imageIndex) {
      // alert("Correct");

      seterrorMsg("Correct");
      // setshowHome(true);
    } else {
      // alert("Wrong");
      seterrorMsg("Wrong");
    }
  };

  useEffect(() => {
    // random number between 0 to 9
    createGame();

    setTimeout(() => {
      setstartGame(true);
      console.log("game starting");
    }, 2000);
  }, []);

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
      {showHome && (
        <div className="home">
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

            <div
              className="image-parent"
              id="divElem"
              onScroll={onScrollMethod}
            >
              <img src="/reel.png" className="image" ref={imageRef} />
            </div>
          </div>
        </div>
      )}
      {!showHome && (
        <div className="game-page">
          <div className="slide-images-parent">
            <p className="capture-text">
              Capture {slideImage[targetIndex]?.name} to continue
            </p>
            <img
              src={
                isCaptured
                  ? slideImage[captureIndex].src
                  : slideImage[imageIndex]?.src
              }
              width={160}
              height={160}
              className="slide-single-image"
            />
            <p className="error-msg">{errorMsg}</p>

            <button
              className="capture-button"
              onClick={() => {
                checkAnswer();
              }}
            >
              Capture
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
