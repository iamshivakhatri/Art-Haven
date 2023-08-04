import './DetailPainting.css';
import logo from '../logo.png';
import Parse from 'parse/dist/parse.min.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const app_id = process.env.REACT_APP_PARSE_APP_ID;
const host_url = process.env.REACT_APP_PARSE_HOST_URL;
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;

Parse.initialize(app_id, javascript_key);
Parse.serverURL = host_url;

function DetailPainting() {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    const fetchPainting = async () => {
      // console.log(`Fetching painting with id ${id}...`);
      try {
        const query = new Parse.Query('Paintings');
        const result = await query.get(id);
        console.log('Painting:', result);
        setPainting(result);
      } catch (error) {
        console.error('Error fetching painting:', error);
      }
    };

    fetchPainting();
  }, [id]);

  if (!painting) {
    return <div>Loading...</div>;
  }

  return (
    <div className="DetailPainting">
      <div className="navBar">
        <div className="leftNavBar">
          <Link to={`/`}>
            <img src={logo} alt="logo" />
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

      <div className="detail">
        <div className="detailImg">
          <img src={painting.get('image').url()} alt={painting.get('title')} />
        </div>
        <div className="detailInfo">
          <h2>{painting.get('title')}</h2>
          <p>$ {painting.get('price')}</p>
          <p>{painting.get('measurement')}</p>
          <p>FREE US SHIPPING</p>
          <Link to={painting.get('payment_link')}>
            <button> Purchase </button>
          </Link>
        </div>
      </div>

      <div className="underLine"></div>
      <p>Copyright © 2023 - All Rights Reserved</p>
    </div>
  );
}

export default DetailPainting;
