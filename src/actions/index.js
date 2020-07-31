import { GET_MEDIA_FILES } from "./constants";

export function getMediaFiles(payload) {
  return {
    type: GET_MEDIA_FILES,
    payload: payload,
  };
}
