import React from "react";
import "../styles/PhotoList.scss";
import "../styles/PhotoDetailsModal.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ( {photos, toggleFavStatus, toggleModal, getFocusedPhotoData, className, fav }) => {

  return (
    <ul className={className}>
      {photos.map((photo) => {
        return (
        <PhotoListItem 
          photo={photo} 
          key={photo.id} 
          toggleFavStatus={toggleFavStatus}
          toggleModal={toggleModal}
          getFocusedPhotoData={getFocusedPhotoData}
          className="photo-list__image"
          fav={fav}
        />
        )
      })}
    </ul>
  );
};

export default PhotoList;
