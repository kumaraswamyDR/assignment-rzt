import {
  GET_MEDIA_FILES,
  GET_MEDIA_FILES_FAILURE,
  GET_MEDIA_FILES_SUCCESS,
  MEDIA_FILES_LOADING
} from "../actions/constants";

const initialState = {
  mediaFiles: [],
  currentPage: 1,
  errorMessage:"",
  loading:false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEDIA_FILES_SUCCESS: {
      if (action.currentPage === 1) {
        return {
          ...state,
          mediaFiles: action.mediaFiles,
          currentPage: state.currentPage + 1,
          loading:false
        };
      } else {
        return {
          ...state,
          mediaFiles: [...state.mediaFiles, ...action.mediaFiles],
          currentPage: state.currentPage + 1,
          loading:false
        };
      }
    }
    case GET_MEDIA_FILES_FAILURE:{
      return {
        ...state,
        errorMessage:action.errorMessage ,
      };
    }
    case MEDIA_FILES_LOADING: {
      return {
        ...state,
        loading:true,
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
