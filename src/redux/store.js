import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import postsReducer from "./postsReducer";
const subreducers = { posts: postsReducer };

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
