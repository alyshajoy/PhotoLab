import { useReducer } from 'react';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const initialState = {
  fav: [],
  isModalOpen: false,
  focusedPhoto: undefined,
  topics,
  photos
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_FAV':
      return { ...state, fav: [...state.fav, action.payload] };
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen };
    case 'SET_FOCUSED_PHOTO':
      return { ...state, focusedPhoto: action.payload };
    default:
      throw new Error("The type stated doesn't exist.");
  }
}

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToFav = (item) => {
    dispatch({ type: 'ADD_ITEM_TO_FAV', payload: item });
  };

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const getFocusedPhotoData = (photo) => {
    dispatch({ type: 'SET_FOCUSED_PHOTO', payload: photo });
  }

  return {
    state,
    addItemToFav,
    toggleModal,
    getFocusedPhotoData
  }
}