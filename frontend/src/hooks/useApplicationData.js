import { useState, useReducer, useEffect } from 'react';

const initialState = {
  fav: [],
  isModalOpen: false,
  focusedPhoto: undefined,
  topics: [],
  photos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV_STATUS':
      const isItemInFav = state.fav.some(item => item.id === action.payload.id);
        if (isItemInFav) { // if photo is already in fav array, remove it
          return {
            ...state,
            fav: state.fav.filter(item => item.id !== action.payload.id),
          };
        }
        return { // if photo doesn't yet exist in fav array, add it
          ...state,
          fav: [...state.fav, action.payload],
        };
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen };
    case 'SET_FOCUSED_PHOTO':
      return { ...state, focusedPhoto: action.payload };
    case 'SET_PHOTO_DATA':
      return {...state, photos: action.payload};
    case 'SET_TOPIC_DATA':
      return {...state, topics: action.payload};
    default:
      throw new Error("The type stated doesn't exist.");
  }
}

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [url, setUrl] = useState("/api/photos");

  // fetch data from new URL with the given topic_id
  const setApiUrl = (topic_id) => {
    setUrl(`/api/topics/photos/${topic_id}`)
  }
  
  // get image data for loading on main page
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_PHOTO_DATA', payload: data}))
      .catch(error => console.log("Fetch Error: ", error))
  }, [url])

  // get topic names for loading in nav
  useEffect(() => {
    fetch("/api/topics")
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_TOPIC_DATA', payload: data}))
      .catch(error => console.log("Fetch Error: ", error))
  }, [])

  const toggleFavStatus = (item) => {
    dispatch({ type: 'TOGGLE_FAV_STATUS', payload: item });
  };

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  // set data that is to be displayed in the modal
  const getFocusedPhotoData = (photo) => {
    dispatch({ type: 'SET_FOCUSED_PHOTO', payload: photo });
  }

  return {
    state,
    toggleFavStatus,
    toggleModal,
    getFocusedPhotoData,
    setApiUrl
  }
}