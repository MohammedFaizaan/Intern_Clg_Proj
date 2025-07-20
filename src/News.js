import React, { useState } from "react";
import "./News.css"

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  const images = [
    "https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/21/full/1732183818-2065.png?im=FitAndFill=(826,465)",
    "https://ridevideogame.com/wp-content/uploads/2024/01/Ride5_patch_cover_01.jpg",
    "https://www.perfectly-nintendo.com/wp-content/uploads/2025/02/Minecraft-Spring-to-Life-800x445.jpg",
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length ? 1 : prevIndex + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 1 ? images.length : prevIndex - 1));
  };

  return (
    <>
    <div className="w3-container">
      <h2 className="game-updates">Game Updates</h2>
      <div className="w3-content">
        {/* Render images */}
        {images.map((src, index) => (
          <img
            key={index}
            className="mySlides"
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              display: slideIndex === index + 1 ? "block" : "none"
            }}
          />
        ))}

        {/* Slide navigation */}
        <div className="w3-center">
          <div
            className="w3-left w3-hover-text-khaki"
            onClick={prevSlide}
            style={{ cursor: "pointer", fontSize: "30px", padding: "10px", opacity:"50%"}}
          >
            &#10094;
          </div>
          <div
            className="w3-right w3-hover-text-khaki"
            onClick={nextSlide}
            style={{ cursor: "pointer", fontSize: "30px", padding: "10px", opacity:"50%"}}
          >
            &#10095;
          </div>
        </div> 
      </div>
    </div>
    <div className="recommended">
      <h2>Recommended Games</h2>
      <div className="bento-recommend">
        <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3241660/1ea445e044a2d5b09cfa8291350b63ebed6e5741/header.jpg?t=1743517226" className="bento-1" alt="R.E.P.O pic"></img>
        <img src="https://upload.wikimedia.org/wikipedia/en/c/c7/Helldivers_art.jpg"className="bento-2" alt="Helldivers pic"></img>
        <img src="https://assets-prd.ignimgs.com/2024/01/19/palworld-1705691572614.jpg"className="bento-3" alt="Pal world pic"></img>
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg" className="bento-4 "alt="csgo"></img>
      </div>
    </div>
    </>
  );
}

export default Slideshow; 
