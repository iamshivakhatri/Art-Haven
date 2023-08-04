import '../App.css';
import logo from '../logo.png';
import Paintings from './Paintings';
import DetailPainting from './DetailPainting';
import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const app_id = process.env.REACT_APP_PARSE_APP_ID
const host_url = process.env.REACT_APP_PARSE_HOST_URL
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY

Parse.initialize(app_id,javascript_key);
Parse.serverURL = host_url

function HomePage() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchAllPaintings = async () => {
      console.log('Fetching all paintings...')
      console.log(app_id,javascript_key)
      try {
        const query = new Parse.Query("Paintings")
        const allPaintings = await query.find();
        console.log("All paintings:", allPaintings);

        if (allPaintings && allPaintings.length > 0) {
          setPaintings(allPaintings);
        } else {
          console.log("No paintings found.");
        }
      } catch (error) {
        console.error("Error fetching paintings", error);
      }
    }

    fetchAllPaintings();
  }, []);

  return (
    <div className="App">
      <div className="navBar">
        <div className="leftNavBar">
          <img src={logo} alt="logo" />
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

      <div className="paintings">
        {paintings.map(painting => (
          <Link to={`/painting/${painting.id}`}>
            <Paintings 
              key={painting.id}
              painting_photo={painting.get('image').url()}
              painting_title={painting.get('title')}
            />
          </Link>
        ))}
      </div>
      <div className="underLine"></div>
      <p>Copyright © 2023 - All Rights Reserved</p>
    </div>
  );
}

export default HomePage;
