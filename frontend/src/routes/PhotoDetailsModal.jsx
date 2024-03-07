import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ focusedPhoto, toggleModal, getFocusedPhotoData, toggleFavStatus, fav }) => {

  const extractSimilarPhotos = () => {
    return focusedPhoto?.similar_photos ? Object.values(focusedPhoto.similar_photos) : [];
  }

  const clickHandler = () => {
    getFocusedPhotoData(photo);
  }

  const focusedPhotoArray = extractSimilarPhotos(focusedPhoto);

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={() => {
          toggleModal();
          getFocusedPhotoData(null);
        }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        photo={focusedPhoto}
        toggleFavStatus={toggleFavStatus}
        fav={fav}
      />
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList
        photos={focusedPhotoArray}
        toggleFavStatus={toggleFavStatus}
        fav={fav}
        clickHandler={clickHandler}
        getFocusedPhotoData={getFocusedPhotoData}
      />
    </div>
  )
};

export default PhotoDetailsModal;
