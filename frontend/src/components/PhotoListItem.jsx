import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const {
    id,
    location: {city, country},
    imageSource,
    username,
    profile
  } = props.photo;
  

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-locations">{city}, {country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
