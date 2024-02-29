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

  const addItemToFav = (item) => {
    setFav([...fav, item]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <HomeRoute 
      topics={topics} 
      photos={photos} 
      addItemToFav={addItemToFav} 
      fav={fav} 
      toggleModal={toggleModal}
      />
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} photos={photos}/>}
    </div>
  );
};

export default App;
