import axios from "axios";

const API_SEARCH_URL = 'https://api.unsplash.com/search/photos/?client_id=XBQ75J3do8gFFZiwShHH1yYFcW7228MSqlM-NpqaIwc'
const API_PHOTO_URL = "https://api.unsplash.com/photos/?client_id=XBQ75J3do8gFFZiwShHH1yYFcW7228MSqlM-NpqaIwc"

export const getMediaFilesService = ({query,currentPage}) => {
  axios.defaults.headers.common = {
    Authorization: `bearer ${localStorage.getItem("kc_token")}`,
  };
  if (query) {
    return axios.get(
        API_SEARCH_URL,
      {
        params: {
          query:query,
          page: currentPage,
          per_page: 9,
        },
      }
    );
  } else {
    return axios.get(
        API_PHOTO_URL,
      {
        params: {
          query: query,
          page: currentPage,
          per_page: 9,
        },
      }
    );
  }
};
