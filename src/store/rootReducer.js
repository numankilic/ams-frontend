import { combineReducers } from "redux";
import customerCartReducer from "./reducers/customerCartReducer";


const rootReducer = combineReducers({
    customerCart : customerCartReducer
})

export default rootReducer;