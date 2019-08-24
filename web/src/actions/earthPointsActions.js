import { GET_EARTH_POINTS } from "./types";
import axios from "axios";

import { API_URL } from "../constants/apiUrl";

export const getEarthPoints = () => async dispatch => {
  let data = null;
  axios
    .get(API_URL + "/points")
    .then(response => {
      // handle success

      data = response.data;
      dispatch({
        type: GET_EARTH_POINTS,
        payload: {
          data
        }
      });
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};
