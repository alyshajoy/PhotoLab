import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    state,
    toggleFavStatus,
    toggleModal,
    getFocusedPhotoData,
    setApiUrl,
    displayLikedPhotos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={state.topics} 
        photos={state.photos} 
        toggleFavStatus={toggleFavStatus} 
        fav={state.fav} 
        toggleModal={toggleModal}
        getFocusedPhotoData={getFocusedPhotoData}
        isModalOpen={state.isModalOpen}
        setApiUrl={setApiUrl}
        displayLikedPhotos={displayLikedPhotos}
      />
      {state.isModalOpen && <PhotoDetailsModal 
        toggleModal={toggleModal}
        focusedPhoto={state.focusedPhoto}
        getFocusedPhotoData={getFocusedPhotoData}
        toggleFavStatus={toggleFavStatus}
        fav={state.fav}
      />}
    </div>
  );
};

export default App;
