import {React, useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={props.fav.length > 0 ? true : false}/>
      <PhotoList photos={props.photos} addItemToFav={props.addItemToFav}/>
    </div>
  );
};

export default HomeRoute;
