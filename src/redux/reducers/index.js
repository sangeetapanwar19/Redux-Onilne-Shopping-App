import {combineReducers} from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";


const reducers = combineReducers({
    completeProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;