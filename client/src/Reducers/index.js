import { combineReducers } from "redux";
import myUserListR from "./myUserListR";
import newUserR from "./newUserR";
import pagesR from "./pagesR";
import searchBarR from "./searchBarR";

const reducers = combineReducers({
    myUserListR,
    newUserR,
    pagesR,
    searchBarR
});

export default reducers;