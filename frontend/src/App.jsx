import {React, useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [fav, setFav] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedPhoto, setOpenedPhoto] = useState();

  const addItemToFav = (item) => {
    setFav([...fav, item]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openPhotoData = (photo) => {
    openedPhoto ? setOpenedPhoto(null) : setOpenedPhoto(photo);
  }

  return (
    <div className="App">
      <HomeRoute 
      topics={topics} 
      photos={photos} 
      addItemToFav={addItemToFav} 
      fav={fav} 
      toggleModal={toggleModal}
      openPhotoData={openPhotoData}
      />
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} openedPhoto={openedPhoto} openPhotoData={openPhotoData}/>}
    </div>
  );
};

export default App;
