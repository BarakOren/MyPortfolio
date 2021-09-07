import {createStore} from "redux";
import { combineReducers } from "redux";
import { menuReducer } from "./header/menu.reducer";
import {headerReducer} from "./header/header.reducer";

const rootReducer = combineReducers({
    headerReducer,
    menuReducer
});

export const store = createStore(rootReducer);