import { useState, useReducer, useEffect } from 'react';

const initialState = {
  fav: [],
  isModalOpen: false,
  focusedPhoto: undefined,
  topics: [],
  photos: [],
};

const GET_PHOTOS_URL = "http://localhost:8001/api/photos";
const GET_TOPICS_URL = "http://localhost:8001/api/topics";
const GET_PHOTOS_BY_TOPICS_URL = "http://localhost:8001/api/topics/photos/:topic_id";

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_FAV':
      return { ...state, fav: [...state.fav, action.payload] };
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
  const [url, setUrl] = useState("http://localhost:8001/api/photos");

  const setApiUrl = (topic_id) => {
    setUrl(`http://localhost:8001/api/topics/photos/${topic_id}`)
  }
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_PHOTO_DATA', payload: data}))
  }, [url])

  useEffect(() => {
    fetch(GET_TOPICS_URL)
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_TOPIC_DATA', payload: data}))
  }, [])

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
    getFocusedPhotoData,
    setApiUrl
  }
}