import { combineReducers, createStore,  } from "redux";
import {
        cartReducer} from './reducers'

const reducer = combineReducers({
     cartReducer});
export const store = createStore(reducer);


export type RootState = ReturnType<typeof store.getState>