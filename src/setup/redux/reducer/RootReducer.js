import { combineReducers } from "redux";
import carReducer from "./CarReducer";

export default combineReducers({
    car: carReducer
});

