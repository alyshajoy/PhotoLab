import { useState } from 'react';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

export default function useApplicationData() {
  const [fav, setFav] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focusedPhoto, setFocusedPhoto] = useState();

  const addItemToFav = (item) => {
    setFav([...fav, item]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getFocusedPhotoData = (photo) => {
    setFocusedPhoto(photo);
  }

  return {
    state: {
      fav,
      isModalOpen,
      focusedPhoto,
      topics,
      photos
    },
    addItemToFav,
    toggleModal,
    getFocusedPhotoData
  }
}