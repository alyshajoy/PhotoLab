import React, { useState, useReducer } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    addItemToFav,
    toggleModal,
    getFocusedPhotoData,
    setApiUrl
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={state.topics} 
        photos={state.photos} 
        addItemToFav={addItemToFav} 
        fav={state.fav} 
        toggleModal={toggleModal}
        getFocusedPhotoData={getFocusedPhotoData}
        isModalOpen={state.isModalOpen}
        setApiUrl={setApiUrl}
      />
      {state.isModalOpen && <PhotoDetailsModal 
        toggleModal={toggleModal}
        focusedPhoto={state.focusedPhoto}
        getFocusedPhotoData={getFocusedPhotoData}
        addItemToFav={addItemToFav}
      />}
    </div>
  );
};

export default App;
