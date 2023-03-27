import { createStore } from "redux";
import reducers from "./reducers/index";
import { compose } from "redux";

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
);

export default store;