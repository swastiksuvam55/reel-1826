import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="nav-bar row">
        <p>Studio</p>
        <p>Roadmap</p>
      </div>
      <div className="body">
        <div className="title-parent">
          <p>
            REEL
            <br />
            1826
          </p>
        </div>

        <div className="image-parent">
          <img src="/reel.png" className="image" />
        </div>
      </div>
    </div>
  );
}
