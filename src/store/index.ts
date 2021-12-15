import { createStore } from "redux"
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./reducers";

export const store = createStore(reducers, composeWithDevTools())
export const persistor = persistStore(store)