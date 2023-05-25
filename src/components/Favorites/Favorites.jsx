import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const Favorites = () => {
  const { myFavorites } = useSelector(state => state);

  return (
    <div className='cards-container'>
      {myFavorites.map((character, index) => {
        const { name, gender, image, status, origin, species, id } = character;

        return (
          <div key={index} className='fav-cont'>
            <div className='card-container'>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="image" src={image} alt="" />
                  <h2 className="image-title">{name}</h2>
                </div>
                <div className="flip-card-back">
                  <h2>More Info</h2>
                  <Link
                    to={{
                      pathname: `/detail/${id}`,
                      state: { data: { name, gender, image, status, origin, species } }
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="info-icon"
                      style={{ animation: 'bounce' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;