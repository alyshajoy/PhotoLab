import {React, useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [fav, setFav] = useState([]);

  const addItemToFav = (item) => {
    setFav([...fav, item]);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} addItemToFav={addItemToFav} fav={fav}/>
    </div>
  );
};

export default App;
