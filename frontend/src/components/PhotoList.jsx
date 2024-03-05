import React from "react";
import "../styles/PhotoList.scss";
import "../styles/PhotoDetailsModal.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ( {photos, addItemToFav, toggleModal, getFocusedPhotoData, className }) => {

  return (
    <ul className={className}>
      {photos.map((photo) => {
        return (
        <PhotoListItem 
          photo={photo} 
          key={photo.id} 
          addItemToFav={addItemToFav}
          toggleModal={toggleModal}
          getFocusedPhotoData={getFocusedPhotoData}
          className="photo-list__image"
        />
        )
      })}
    </ul>
  );
};

export default PhotoList;
