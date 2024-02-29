import {React, useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation 
        topics={props.topics} 
        isFavPhotoExist={props.fav.length > 0}
      />
      <PhotoList 
        photos={props.photos} 
        addItemToFav={props.addItemToFav} 
        fav={props.fav}
        toggleModal={props.toggleModal}
        openPhotoData={props.openPhotoData}
      />
    </div>
  );
};

export default HomeRoute;
