import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
import { faCircleInfo, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cardName = {
  color: "rgb(178, 223, 40)",
  padding: "0 20px 0 20px",
};

export default function Card(props) {
  const {name, gender, image, status, origin, species, id} = props;
  return (
    <div className="card-container">
      <button
        className="btn"
        onClick={() => {props.onClose(id)}}
      >
        <FontAwesomeIcon icon={faCircleXmark} shake />
      </button>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="image" src={image} alt="" />
            <h2 className="image-title" style={cardName}>{name}</h2>
          </div>
          <div className="flip-card-back">
            <h2>More Info</h2>
            <Link to={`/detail/${props.id}`} state={{data: {name, gender, image, status, origin, species }}}>
            <FontAwesomeIcon 
                icon={faCircleInfo} 
                bounce
                className="info-icon" 
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
