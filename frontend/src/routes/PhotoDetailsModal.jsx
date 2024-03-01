import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {

  const focusedPhoto = props.focusedPhoto;

  const extractSimilarPhotos = () => {
    const similarPhotos = focusedPhoto.similar_photos;
    return Object.values(similarPhotos);
  }

  const focusedPhotoArray = extractSimilarPhotos(focusedPhoto);

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={() => {
          props.toggleModal();
          props.getFocusedPhotoData(null);
        }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        className="photo-details-modal__image"
        photo={focusedPhoto}
        addItemToFav={props.addItemToFav}
      />
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList className="photo-details-modal__images" photos={focusedPhotoArray}/>
    </div>
  )
};

export default PhotoDetailsModal;
