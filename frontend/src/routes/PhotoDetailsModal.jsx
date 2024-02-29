import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      {console.log(props.openedPhoto)}
      <button className="photo-details-modal__close-button" onClick={() => {props.toggleModal(); props.openPhotoData(props.openedPhoto) }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
