import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootreducer from "./root-reducer";

import { logger } from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootreducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
