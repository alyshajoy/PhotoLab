import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ toggleFavStatus, photo, toggleModal, getFocusedPhotoData, clickHandler, fav }) => {

  const {
    location: {city, country},
    urls: {full},
    user: {name, profile}
  } = photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavStatus={toggleFavStatus}
        item={photo}
        fav={fav}
      />
      <img 
        src={full}
        className="photo-list__image"
        onClick={clickHandler}/>
      <div className="photo-list__user-details">
        <img 
          src={profile} 
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p>{name}</p>
          <p className="photo-list__user-locations">{city}, {country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
