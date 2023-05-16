import "./Card.css";

const cardName = {
  color: "black",
  padding: "0 20px 0 20px",
};

export default function Card(props) {
  return (
    <div className="card-container">
      {/* <button
        className="btn"
        onClick={() => window.alert("Emulamos que se cierra la card")}
      >
        X
      </button> */}
      {/* <div className="image-container">
        <img className="image" src={props.image} alt="" />
      </div>
      <div className="borde"></div>
      <div className="name">
        <h2 style={cardName}>{props.name}</h2>
      </div>
      <h2>{props.id}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.origin}</h2> */}
      <button
        className="btn"
        onClick={() => window.alert("Emulamos que se cierra la card")}
      >x</button>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <img className="image" src={props.image} alt="" />
          </div>
          <div class="flip-card-back">
            <h2>{props.id}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.origin}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
