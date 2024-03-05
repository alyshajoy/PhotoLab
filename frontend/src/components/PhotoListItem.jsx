import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ addItemToFav, photo, className, toggleModal, getFocusedPhotoData }) => {

  const {
    location: {city, country},
    urls: {full},
    user: {name, profile}
  } = photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton addItemToFav={addItemToFav} item={photo}/>
      <img 
        src={full}
        className={className}
        onClick={() => {
          toggleModal();
          getFocusedPhotoData(photo);
        }}/>
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
