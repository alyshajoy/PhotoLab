import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

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

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        addItemToFav={addItemToFav} 
        fav={fav} 
        toggleModal={toggleModal}
        getFocusedPhotoData={getFocusedPhotoData}
        isModalOpen={isModalOpen}
      />
      {isModalOpen && <PhotoDetailsModal 
        toggleModal={toggleModal}
        focusedPhoto={focusedPhoto}
        getFocusedPhotoData={getFocusedPhotoData}
        addItemToFav={addItemToFav}
      />}
    </div>
  );
};

export default App;
