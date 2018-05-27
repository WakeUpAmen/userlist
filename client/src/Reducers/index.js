import { combineReducers } from "redux";
import myUserListR from "./myUserListR";
import editUserR from "./editUserR";
import searchBarR from "./searchBarR";

const reducers = combineReducers({
    myUserListR,
    editUserR,
    searchBarR
});

export default reducers;