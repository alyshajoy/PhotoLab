import React from "react";
import "../styles/PhotoList.scss";
import "../styles/PhotoDetailsModal.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ( {photos, toggleFavStatus, toggleModal, getFocusedPhotoData, className, fav }) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
        <PhotoListItem 
          photo={photo} 
          key={photo.id} 
          toggleFavStatus={toggleFavStatus}
          clickHandler={() => {
            toggleModal();
            getFocusedPhotoData(photo);
          }}
          fav={fav}
        />
        )
      })}
    </ul>
  );
};

export default PhotoList;
