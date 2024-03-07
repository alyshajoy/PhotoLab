import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavStatus, item, fav }) {

  const [selected, setSelected] = useState(false);

  useEffect(() => { // fills in heart icons for every item in fav array
    const itemID = item.id;
    const exists = fav.some(photo => photo.id === itemID);
    setSelected(exists);
  }, [fav, item.id]);

  const toggleSelected = () => {
    setSelected(selected => !selected);
    toggleFavStatus(item);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          displayAlert={false}
          selected={selected}
          onClick={toggleSelected}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;