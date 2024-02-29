import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = (props) => {

  const {
    id,
    location: {city, country},
    urls: {full, regular},
    user: {username, name, profile}
  } = props.photo;
  

  return (
    <div className="photo-list__item" onClick={props.toggleModal}>
      <PhotoFavButton addItemToFav={props.addItemToFav} item={props.photo}/>
      <img src={full} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{name}</p>
          <p className="photo-list__user-locations">{city}, {country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
