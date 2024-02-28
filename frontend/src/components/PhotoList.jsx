import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const sampleDataForPhotoList = photos;

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo) => {
        return (
        <PhotoListItem photo={photo} key={photo.id}/>
        )
      })}
    </ul>
  );
};

export default PhotoList;
