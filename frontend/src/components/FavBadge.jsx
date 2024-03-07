import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, displayLikedPhotos }) => {
  return (
    <div className='fav-badge' onClick={displayLikedPhotos}>
      <FavIcon
        displayAlert={!!isFavPhotoExist}
        selected={true}
      />
    </div>
  ) 
};

export default FavBadge;