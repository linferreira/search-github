import * as Redux from "redux";
import * as ReduxDevtools from "redux-devtools-extension";
import thunk from "redux-thunk";

import searchUsersReducer from "./reducers/search";

const rootReducer = Redux.combineReducers({
  getUsers: searchUsersReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return Redux.createStore(
    rootReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(thunk))
  );
}
