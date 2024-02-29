import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const sampleDataForPhotoList = props.photos;

  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo) => {
        return (
        <PhotoListItem photo={photo} key={photo.id} addItemToFav={props.addItemToFav}/>
        )
      })}
    </ul>
  );
};

export default PhotoList;
