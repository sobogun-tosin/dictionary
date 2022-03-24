import {
  DictionaryAction,
  ERROR,
  InitialState,
  LOADING,
  SEARCH,
} from "../types";

const initialState: InitialState = {
  loading: false,
  error: "",
  search: [],
};
const DictionaryReducer = (
  state: InitialState = initialState,
  action: DictionaryAction
) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default DictionaryReducer;
