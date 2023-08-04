import './Paintings.css';
import { Link } from 'react-router-dom';

function Paintings({painting_photo,painting_title}) {
  return (
    <div className="Paintings">
      <img src={painting_photo} />
      <p>{painting_title}</p>
    </div>
  );
}

export default Paintings;
