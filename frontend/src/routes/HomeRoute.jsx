import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation 
        topics={props.topics} 
        isFavPhotoExist={props.fav.length > 0}
        setApiUrl={props.setApiUrl}
      />
      <PhotoList 
        photos={props.photos} 
        addItemToFav={props.addItemToFav} 
        fav={props.fav}
        toggleModal={props.toggleModal}
        getFocusedPhotoData={props.getFocusedPhotoData}
        isModalOpen={props.isModalOpen}
        className="photo-list"
      />
    </div>
  );
};

export default HomeRoute;
