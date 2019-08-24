import { combineReducers } from "redux";

import userReducer from "./user";
import statsReducer from "./stats";

const rootReducer = combineReducers({
  user: userReducer,
  stats: statsReducer
});

export default rootReducer;
