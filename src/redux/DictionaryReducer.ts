import { DictionaryAction, ERROR, LOADING, SEARCH, SearchState } from "./types";

interface InitialState {
  loading: boolean;
  error: string;
  search?: SearchState[];
}
const initialState: InitialState = {
  loading: false,
  error: "",
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
      };
    default:
      return state;
  }
};

export default DictionaryReducer;
