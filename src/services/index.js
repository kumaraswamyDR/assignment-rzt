import axios from "axios"

export const getMediaFilesService = (payload) => {
    axios.defaults.headers.common = {
        Authorization: `bearer ${localStorage.getItem("kc_token")}`
    };
    if(payload.query){
        return axios.get(`https://api.unsplash.com/search/photos/?client_id=XBQ75J3do8gFFZiwShHH1yYFcW7228MSqlM-NpqaIwc`,{params:{query:payload.query,page:payload.currentPage,per_page:9}})
    }
    else{
        return axios.get(`https://api.unsplash.com/photos/?client_id=XBQ75J3do8gFFZiwShHH1yYFcW7228MSqlM-NpqaIwc`,{params:{query:payload.query,page:payload.currentPage,per_page:12}})

    }
};
