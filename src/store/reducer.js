import { combineReducers } from "redux";
import counterreducer from "./counter-reducer";
import todoreducer from "./todo-reducer";
const reducer = combineReducers({ counterreducer, todoreducer })    
export default reducer