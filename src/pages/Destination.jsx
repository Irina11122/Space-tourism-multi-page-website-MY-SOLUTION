<<<<<<< HEAD
import { useEffect, useState } from 'react';
import '../css/Destination.css';
import data from '../data.json';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Destination() {
  const [destination, setDestination] = useState([]);
  const [selectDestination, setSelectDestination] = useState(null);

  useEffect(() => {
    setDestination(data.destinations);
    setSelectDestination(data.destinations[0]);

    const setResponsiveBackground = () => {
      let imgUrl = '/destination/background-destination-desktop.jpg';

      if (window.innerWidth <= 768) {
        imgUrl = '/destination/background-destination-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imgUrl = '/destination/background-destination-tablet.jpg';
      }

      document.body.style.backgroundImage = `url(${imgUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.minHeight = '100vh';
    };

    setResponsiveBackground();
    window.addEventListener('resize', setResponsiveBackground);

    return () => window.removeEventListener('resize', setResponsiveBackground);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '#planetImg',
      { scale: 0.3, rotate: '-45deg' },
      { scale: 1, duration: 1, rotate: '45deg' },
    );
  }, [selectDestination]);

  return (
    <div className="whole-dest-container">
      <div className="pick-destination-title">
        <h1>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
      </div>
      {selectDestination && (
        <div className="dest-content-container">
          <div className="img-container">
            <img
              id="planetImg"
              src={selectDestination.images.png}
              alt="planet-img"
            />
          </div>
          <div className="right-side-container">
            <nav className="button-nav">
              {destination.map((d, index) => (
                <button
                  className={selectDestination?.name === d.name ? 'active' : ''}
                  onClick={() => setSelectDestination(d)}
                  key={index}
                >
                  {d.name}
                </button>
              ))}
            </nav>
            <h1 className="planet-name">{selectDestination.name}</h1>
            <p className="planet-description">
              {selectDestination.description}
            </p>
            <hr />
            <div className="bottom-dest-part">
              <div>
                <h4>AVG. DISTANCE</h4>
                <h2> {selectDestination.distance} </h2>
              </div>
              <div>
                <h4>EST. TRAVEL TIME</h4>
                <h2> {selectDestination.travel} </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
=======
import { useEffect, useState } from 'react';
import '../css/Destination.css';
import data from '../data.json';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Destination() {
  const [destination, setDestination] = useState([]);
  const [selectDestination, setSelectDestination] = useState(null);

  useEffect(() => {
    setDestination(data.destinations);
    setSelectDestination(data.destinations[0]);

    const setResponsiveBackground = () => {
      let imgUrl = '/destination/background-destination-desktop.jpg';

      if (window.innerWidth <= 768) {
        imgUrl = '/destination/background-destination-mobile.jpg';
      } else if (window.innerWidth <= 1024) {
        imgUrl = '/destination/background-destination-tablet.jpg';
      }

      document.body.style.backgroundImage = `url(${imgUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.minHeight = '100vh';
    };

    setResponsiveBackground();
    window.addEventListener('resize', setResponsiveBackground);

    return () => window.removeEventListener('resize', setResponsiveBackground);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '#planetImg',
      { scale: 0.3, rotate: '-45deg' },
      { scale: 1, duration: 1, rotate: '45deg' },
    );
  }, [selectDestination]);

  return (
    <div className="whole-dest-container">
      <div className="pick-destination-title">
        <h1>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
      </div>
      {selectDestination && (
        <div className="dest-content-container">
          <div className="img-container">
            <img
              id="planetImg"
              src={selectDestination.images.png}
              alt="planet-img"
            />
          </div>
          <div className="right-side-container">
            <nav className="button-nav">
              {destination.map((d, index) => (
                <button
                  className={selectDestination?.name === d.name ? 'active' : ''}
                  onClick={() => setSelectDestination(d)}
                  key={index}
                >
                  {d.name}
                </button>
              ))}
            </nav>
            <h1 className="planet-name">{selectDestination.name}</h1>
            <p className="planet-description">
              {selectDestination.description}
            </p>
            <hr />
            <div className="bottom-dest-part">
              <div>
                <h4>AVG. DISTANCE</h4>
                <h2> {selectDestination.distance} </h2>
              </div>
              <div>
                <h4>EST. TRAVEL TIME</h4>
                <h2> {selectDestination.travel} </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
>>>>>>> 57ddcef (Initial commit)
