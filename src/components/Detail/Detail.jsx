// import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

const Detail = (props) => {
  //   const {id} = useParams()
  //   const [character, setCharacter] = useState()
  //   useEffect(() => {
  //     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
  //        if (data.name) {
  //           setCharacter(data);
  //        } else {
  //           window.alert('No hay personajes con ese ID');
  //        }
  //     });
  //     return setCharacter({});
  //  }, [id]);

  let { state } = useLocation();
  const { data } = state;
  console.log(data)
  return (
    <div className="detail-cont">
      <div className="det-left">
        <img className="det-img" src={data.image} alt="" />
      </div>
      <div className="separador"></div>
      <div className="det-right">
        <h1>{data.name}</h1>
        <ul className="info-cont">
          <li>{data.species}</li>
          <hr />
          <li>{data.gender}</li>
          <hr />
          <li>{data.status}</li>
          <hr />
          <li>{data.origin}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
