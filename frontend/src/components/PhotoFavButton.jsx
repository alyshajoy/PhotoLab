import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ addItemToFav, item }) {

  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(selected => !selected);
    addItemToFav(item);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={selected} onClick={toggleSelected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;