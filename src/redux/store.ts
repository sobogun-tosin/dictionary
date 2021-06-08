import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
export type RootStore = ReturnType<typeof RootReducer>;
