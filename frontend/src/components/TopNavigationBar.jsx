import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, setApiUrl, isFavPhotoExist, displayLikedPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setApiUrl={setApiUrl}/>
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
        displayLikedPhotos={displayLikedPhotos}
      />
    </div>
  )
}

export default TopNavigation;