<<<<<<< HEAD
import { useEffect, useState } from 'react';
import '../css/Home.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const setResponsiveBackground = () => {
      let imageUrl = './home/background-home-desktop.jpg';

      if (window.innerWidth <= 768) {
        imageUrl = './home/background-home-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imageUrl = './home/background-home-tablet.jpg';
      }
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';

      setBackgroundImage(imageUrl);
    };

    setResponsiveBackground();
    window.addEventListener('resize', setResponsiveBackground);

    return () => window.removeEventListener('resize', setResponsiveBackground);
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      '#home',
      {
        x: -100,
      },
      { x: 0, duration: 1.3 },
    );
  }, []);
  return (
    <div id="home" className="whole-home-container">
      <div className="home-content">
        <div className="home-info">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly
            out-of-this-world experience!
          </p>
        </div>
        <div className="home-explore-btn">
          <div className="home-btn-circle">
            <h1>EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import { useEffect, useState } from 'react';
import '../css/Home.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const setResponsiveBackground = () => {
      let imageUrl = './home/background-home-desktop.jpg';

      if (window.innerWidth <= 768) {
        imageUrl = './home/background-home-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imageUrl = './home/background-home-tablet.jpg';
      }
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';

      setBackgroundImage(imageUrl);
    };

    setResponsiveBackground();
    window.addEventListener('resize', setResponsiveBackground);

    return () => window.removeEventListener('resize', setResponsiveBackground);
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      '#home',
      {
        x: -100,
      },
      { x: 0, duration: 1.3 },
    );
  }, []);
  return (
    <div id="home" className="whole-home-container">
      <div className="home-content">
        <div className="home-info">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly
            out-of-this-world experience!
          </p>
        </div>
        <div className="home-explore-btn">
          <div className="home-btn-circle">
            <h1>EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 57ddcef (Initial commit)
