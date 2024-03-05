import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ focusedPhoto, toggleModal, getFocusedPhotoData, addItemToFav }) => {

  const extractSimilarPhotos = () => {
    return focusedPhoto?.similar_photos ? Object.values(focusedPhoto.similar_photos) : [];
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
        className="photo-details-modal__image"
        photo={focusedPhoto}
        addItemToFav={addItemToFav}
      />
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList
        className="photo-details-modal__images"
        photos={focusedPhotoArray}
        addItemToFav={addItemToFav}
      />
    </div>
  )
};

export default PhotoDetailsModal;
