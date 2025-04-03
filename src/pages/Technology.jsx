<<<<<<< HEAD
import data from '../data.json';
import '../css/Technology.css';
import { useEffect, useState } from 'react';

export default function Technology() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setSlides(data.technology);

    const setResponsiveBackground = () => {
      let imageURL = 'technology/background-technology-desktop.jpg';
      if (window.innerWidth <= 768) {
        imageURL = 'technology/background-technology-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imageURL = 'technology/background-technology-tablet.jpg';
      }
      document.body.style.backgroundImage = `url(${imageURL})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    };

    const setResponsiveImage = () => {
      let image = 'technology/image-launch-vehicle-portrait.jpg';
      if (window.innerWidth <= 768) {
        image =
          slides[currentIndex]?.images.landscape ||
          'technology/image-launch-vehicle-landscape.jpg';
      } else if (window.innerWidth <= 1024) {
        image =
          slides[currentIndex]?.images.landscape ||
          'technology/image-launch-vehicle-landscape.jpg';
      } else {
        image =
          slides[currentIndex]?.images.portrait || 'default-desktop-image.jpg';
      }
      setCurrentImage(image);
    };

    setResponsiveBackground();
    setResponsiveImage();

    window.addEventListener('resize', () => {
      setResponsiveBackground();
      setResponsiveImage();
    });

    return () => window.removeEventListener('resize', setResponsiveBackground);
  }, [currentIndex, slides]);

  const handleDots = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="tech-whole-container">
        <div className="space-launch-title">
          <h1>
            <span>03</span> SPACE LAUNCH 101{' '}
          </h1>
        </div>
        <div className="tech-flex-container">
          <div className="tech-info-dots-container">
            <div className="tech-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDots(index)}
                  className={`dots ${index === currentIndex ? 'active' : ''}`}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className="tech-info">
              <h1 className="terminology-title">THE TERMINOLOGY...</h1>
              <h1> {slides[currentIndex]?.name} </h1>
              <p> {slides[currentIndex]?.description} </p>
            </div>
          </div>
          <div className="tech-img-container">
            <img height={550} src={currentImage || null} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import data from '../data.json';
import '../css/Technology.css';
import { useEffect, useState } from 'react';

export default function Technology() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setSlides(data.technology);

    const setResponsiveBackground = () => {
      let imageURL = 'technology/background-technology-desktop.jpg';
      if (window.innerWidth <= 768) {
        imageURL = 'technology/background-technology-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imageURL = 'technology/background-technology-tablet.jpg';
      }
      document.body.style.backgroundImage = `url(${imageURL})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    };

    const setResponsiveImage = () => {
      let image = 'technology/image-launch-vehicle-portrait.jpg';
      if (window.innerWidth <= 768) {
        image =
          slides[currentIndex]?.images.landscape ||
          'technology/image-launch-vehicle-landscape.jpg';
      } else if (window.innerWidth <= 1024) {
        image =
          slides[currentIndex]?.images.landscape ||
          'technology/image-launch-vehicle-landscape.jpg';
      } else {
        image =
          slides[currentIndex]?.images.portrait || 'default-desktop-image.jpg';
      }
      setCurrentImage(image);
    };

    setResponsiveBackground();
    setResponsiveImage();

    window.addEventListener('resize', () => {
      setResponsiveBackground();
      setResponsiveImage();
    });

    return () => window.removeEventListener('resize', setResponsiveBackground);
  }, [currentIndex, slides]);

  const handleDots = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="tech-whole-container">
        <div className="space-launch-title">
          <h1>
            <span>03</span> SPACE LAUNCH 101{' '}
          </h1>
        </div>
        <div className="tech-flex-container">
          <div className="tech-info-dots-container">
            <div className="tech-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDots(index)}
                  className={`dots ${index === currentIndex ? 'active' : ''}`}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className="tech-info">
              <h1 className="terminology-title">THE TERMINOLOGY...</h1>
              <h1> {slides[currentIndex]?.name} </h1>
              <p> {slides[currentIndex]?.description} </p>
            </div>
          </div>
          <div className="tech-img-container">
            <img height={550} src={currentImage || null} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 57ddcef (Initial commit)
