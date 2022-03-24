import axios from "axios";
import { Dispatch } from "react";
import { DictionaryAction, ERROR, LOADING, SEARCH } from "../types";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US";

export const searchWords =
  (item: string) => async (dispatch: Dispatch<DictionaryAction>) => {
    dispatch({ type: LOADING });
    try {
      const res = await axios.get(`${url}/${item}`);
      const dataRes = res.data;
      if (!res.status) {
        throw new Error(res.statusText);
      } else {
        dispatch({
          type: SEARCH,
          payload: dataRes,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR,
        payload: "sorry word not found",
      });
    }
  };
