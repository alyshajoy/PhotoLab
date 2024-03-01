import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoDetailsModal.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const photosArray = props.photos;

  return (
    <ul className={props.className}>
      {photosArray.map((photo) => {
        return (
        <PhotoListItem 
          photo={photo} 
          key={photo.id} 
          addItemToFav={props.addItemToFav}
          toggleModal={props.toggleModal}
          getFocusedPhotoData={props.getFocusedPhotoData}
          isModalOpen={props.isModalOpen}
          className="photo-list__image"
        />
        )
      })}
    </ul>
  );
};

export default PhotoList;
