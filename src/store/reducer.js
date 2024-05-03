import { combineReducers } from "redux";
import counterreducer from "./counter-reducer";
import todoreducer from "./todo-reducer";
import productReducer from "../product.reducer";
const reducer = combineReducers({ counterreducer, todoreducer,productReducer })    
export default reducer