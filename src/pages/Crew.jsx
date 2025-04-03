import data from '../data.json';
import '../css/Crew.css';
import { useEffect, useState } from 'react';
export default function Crew() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlides(data.crew);
    const setResponsiveBg = () => {
      let imageURL = 'crew/background-crew-desktop.jpg';
      if (window.innerWidth <= 768) {
        imageURL = 'crew/background-crew-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imageURL = 'crew/background-crew-tablet.jpg';
      }
      document.body.style.backgroundImage = `url(${imageURL})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    };
    setResponsiveBg();
    window.addEventListener('resize', setResponsiveBg);
    return () => window.removeEventListener('resize', setResponsiveBg);
  }, []);

  const handleDots = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div></div>
      {slides && (
        <div className="whole-crew-container">
          <div className="meet-your-crew-title">
            <h1>
              <span>02</span> MEET YOUR CREW
            </h1>
          </div>
          <div className="crew-content-container">
            <div className="bio-content">
              <div>
                <h2> {slides[currentIndex]?.role} </h2>
                <h1> {slides[currentIndex]?.name} </h1>
                <p> {slides[currentIndex]?.bio} </p>
              </div>
              <div className="crew-dots">
                {slides.map((_, index) => (
                  <span
                    className={`span-dots ${
                      index === currentIndex ? 'active' : ''
                    } `}
                    key={index}
                    onClick={() => handleDots(index)}
                  ></span>
                ))}
              </div>
            </div>
            <div className="crew-img-container">
              <div>
                <img
                  width={400}
                  height={500}
                  src={slides[currentIndex]?.images.png}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
