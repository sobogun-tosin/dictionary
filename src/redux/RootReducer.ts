import { combineReducers } from "redux";
import DictionaryReducer from "./DictionaryReducer";

const RootReducer = combineReducers({ dictionary: DictionaryReducer });

export default RootReducer;
