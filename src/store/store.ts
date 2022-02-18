import { combineReducers, createStore,  } from "redux";
import {
    // pizzaListReducer,
     cartReducer} from './reducers'

const reducer = combineReducers({
    // pizzaListReducer, 
    cartReducer});
export const store = createStore(reducer);


export type RootState = ReturnType<typeof store.getState>