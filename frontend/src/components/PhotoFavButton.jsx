import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(selected => !selected);
    props.addItemToFav(props.item);
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