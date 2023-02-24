import { createStore } from "redux";
import rootReducer from "../redux/reducer";
export  const store =createStore(rootReducer)
 export default store