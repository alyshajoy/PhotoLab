import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
id: "1",
location: {
  city: "Montreal",
  country: "Canada",
},
imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
username: "Joe Example",
profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const createPhotoList = (numOfPhotos) => {
  const photoArray = [...Array(numOfPhotos)].map((_, i) => ({
    ...sampleDataForPhotoListItem,
    id: `${i}`
  }));

  return photoArray.map((photo, index) => (
    <PhotoListItem key={photo.id} photo={photo} />
  ))
}

// Note: Rendering a single component to build components in isolation
const App = () => {


  return (
    <div className="App">
      {createPhotoList(3)}
    </div>
  );
};

export default App;
