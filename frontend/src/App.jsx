import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// const createPhotoList = (numOfPhotos) => {
  // const photoArray = [...Array(numOfPhotos)].map((_, i) => ({
  //   ...sampleDataForPhotoListItem,
  //   id: `${i}`
  // }));

//   return photoArray.map((photo, index) => (
//     <PhotoListItem key={photo.id} photo={photo} />
//   ))
// }

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
