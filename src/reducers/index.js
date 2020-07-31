import {GET_MEDIA_FILES, GET_MEDIA_FILES_SUCCESS} from "../actions/constants";

const initialState = {
    mediaFiles:[],
    currentPage:1
};

function rootReducer (state = initialState,action){
    switch (action.type) {
        case GET_MEDIA_FILES_SUCCESS:{
            if(action.currentPage === 1){
                return {...state,mediaFiles:action.mediaFiles,currentPage:state.currentPage+1};
            }
            else {
                return {...state,mediaFiles:[...state.mediaFiles,...action.mediaFiles],currentPage:state.currentPage+1};
            }
        }
        default: {
            return state
        }
    }
}

export default rootReducer;
