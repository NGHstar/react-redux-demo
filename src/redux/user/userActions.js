import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => dispatch({ type: FETCH_USERS_SUCCESS, payload: data }))
      .catch((err) => dispatch({ type: FETCH_USERS_FAILURE, payload: err.message }));
  };
}

// export const fetchUsers = () => () => {};
