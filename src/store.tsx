import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  syncTranslationWithStore,
  setLocale,
  loadTranslations,
} from "react-redux-i18n";

import thunk from "redux-thunk";
import rootReducer from "./reducers";
import translation from "./lang";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const locale = localStorage.getItem("locale");

syncTranslationWithStore(store);

store.dispatch<any>(loadTranslations(translation));
store.dispatch<any>(setLocale(locale ? locale : "en"));

export type AppDispatch = typeof store.dispatch;

export default store;
