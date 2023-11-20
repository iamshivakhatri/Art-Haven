import './About.css';
import logo from './arthaven.png';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="About">
      <div className="navBar">
        <div className="leftNavBar">
          <Link to="/">
          <img style={{ width: "10%", height: "auto" }} src={logo} alt="logo" />
          </Link>
        </div>
        <div className="rightNavBar">
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>
        </div>
      </div>
      <div className="underLine"></div>
      <div className="aboutMe">
        <h2>Art-Haven</h2>
        <div className="profileInfo">
          {/* <img src="https://media.licdn.com/dms/image/C5603AQHeh-BJFXG4hA/profile-displayphoto-shrink_800_800/0/1653664156404?e=1686182400&v=beta&t=FV7s5panH5aW3odsS67lzkX1rO3qsz3uQStJhfkbhpQ" alt="profile" /> */}
          <p> 
          Welcome to Art Haven! We're a special place for art lovers to discover and cherish beautiful paintings. Our collection features a mix of styles and stories, brought to life by talented artists. Each painting in our gallery has its own unique tale, waiting for you to explore.
          </p>
           <p>
           At Art Haven, we believe in making art accessible and enjoyable. Whether you're a seasoned collector or someone just starting, our carefully curated selection offers something for everyone. From contemporary wonders to timeless classics, each piece is a masterpiece in its own right, waiting to find its way to your heart.

           </p>

           <p>
           Join us on this artistic journey, where passion and creativity blend seamlessly. Art Haven is more than just a website; it's a welcoming space for you to find the perfect painting that speaks to you. Dive into the world of art with us and let the joy of collecting beautiful pieces brighten your space and your day.

           </p>
        </div>
      </div>
      <div className="underLine"></div>
      <p>Copyright © 2023 - Developed by shiva</p>
    </div>
  );
}

export default About;
