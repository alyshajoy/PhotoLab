import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  const {
    id,
    location: {city, country},
    imageSource,
    username,
    profile
  } = props.sampleData;
  

  return (
    <div>
      <img src={imageSource} />
      <img src={profile} />
      <p>{username}</p>
      <p>{city}, {country}</p>
    </div>
  )
};

export default PhotoListItem;
