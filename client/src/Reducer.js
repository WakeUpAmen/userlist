//1 create state
// 1. create state, action, reducer
import axios from 'axios';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    filterText: '',
    users: [],
    _id: "",firstname:"", lastname :"",sex:"",age:"", pwd:"",
    itemNum: 5, page: 1, newFlag: false, editFlag: false,
  };

export function getAllUsersFromServer(url) {
    return (dispatch) => {
        axios.get(url)
        .then((response) => {
            console.log(response.data);
            dispatch(getAll(response.data));
        })
        .catch(err => {
            console.log(err);
            window.alert("error");
        });
    }
}

export function addOneToServer(url, userdata) {
    return (dispatch) => {
        axios.post(url, {
            firstname: userdata.firstname,
            lastname: userdata.lastname,
            sex: userdata.sex,
            age: userdata.age,
            pwd: userdata.pwd,
        })
        .then((response) => {
            console.log(response.data);
            dispatch(addOnePerson(userdata));
        })
        .catch(err => {
            console.log(err);
            window.alert("error");
        });
    }
}

export function updateOneToServer(url, userdata) {
    return (dispatch) => {
        axios.put(url, {
            _id : userdata._id,
            firstname: userdata.firstname,
            lastname: userdata.lastname,
            sex: userdata.sex,
            age: userdata.age,
            pwd: userdata.pwd,
        })
        .then((response) => {
            console.log(response.data);
            dispatch(updatePerson(userdata));
        })
        .catch(err => {
            console.log(err);
            window.alert("error");
        });
    }
}

export function deleteOneFromServer(url, id) {
    console.log(id);
    return (dispatch) => {
        axios.delete(url, {
            id:id,
        })
        .then((response) => {
            console.log(response.data);
            dispatch(deleteOnePerson(id));
        })
        .catch(err => {
            console.log(err);
            window.alert("error");
        });
    }
}
//actions
export const addOnePerson =userinfo=>({type: 'INCREMENT_ONE', userinfo});
export const deleteOnePerson = id =>({type: 'MINUS_ONE', id});
export const editPerson ={type: 'EDIT_ONE', id: 0};
export const updatePerson =userinfo =>({type: 'UPDATE_PERSON', userinfo});
export const setEditFlag = {type: 'SET_EDITFLAG', editFlag:false};
export const setNewFlag ={type: 'SET_NEWFLAG', newFlag: false};
export const setSort ={type: 'SET_SORT', str:""};
export const setFilterText ={type: 'SET_FILTERTEXT', text: ""};

export const setPage={type: 'SET_PAGE', page:1};


export const pageIncrement={type: 'PAGE_INCREMENT'};
export const pageDecrement={type: 'PAGE_DECREMENT'};

export const getAll = data => ({type: 'GET_ALL', data});
//reducer

export const myUserListR =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_ALL':
            return {...state,users: action.data};
        case 'INCREMENT_ONE':
            let arr4 = [...state.users, action.userinfo]
            return {...state, users: arr4};
        case 'MINUS_ONE':
            return {...state, users: state.users.filter(user=>user._id !== action.id)};
             
        case 'EDIT_ONE':
            let arr2 = {};
            state.users.forEach(element => {
                if(element._id === action.id){
                    arr2 = element;
                }
            });
            return {...state, _id: arr2._id, firstname: arr2.firstname, lastname: arr2.lastname, sex: arr2.sex, age:arr2.age, pwd: arr2.pwd};
        case 'UPDATE_PERSON':
        console.log(action.userinfo);
            return {
                ...state, users: state.users.map(user =>{
                    if(user._id == action.userinfo._id){
                        return {
                            ...user,
                            firstname: action.userinfo.firstname,
                            lastname: action.userinfo.lastname,
                            sex: action.userinfo.sex,
                            age: action.userinfo.age,
                            pwd: action.userinfo.pwd
                        };
                    }else{
                        return user;
                    }
                })
            }
        case 'SET_EDITFLAG':
            return {...state, editFlag: action.editFlag};
        
        case 'SET_NEWFLAG':
            return {...state, newFlag: action.newFlag};
        case 'SET_FILTERTEXT':
            return {...state, filterText: action.text};
        case 'SET_SORT':
            
            // if(action.str === "age"){
            //     return {...state, users: state.users.sort((a, b) => a[action.str]-b[action.str])}
            // }else{
            //     return {...state, users: state.users.sort(function(a, b) {
            //         var nameA = a[action.str].toUpperCase(); // ignore upper and lowercase
            //         var nameB = b[action.str].toUpperCase(); // ignore upper and lowercase
            //         return nameA < nameB ? -1 : nameA > nameB ? 1: 0;
            //     })}
            // }
            let arr5 = [];
            state.users.forEach(element => {
                arr5.push(element);
            });
            if(action.str === "age"){
                arr5.sort((a, b)=> a[action.str]-b[action.str])
            }else{
                arr5.sort(function(a, b) {
                    var nameA = a[action.str].toUpperCase(); // ignore upper and lowercase
                    var nameB = b[action.str].toUpperCase(); // ignore upper and lowercase
                    return nameA < nameB ? -1 : nameA > nameB ? 1: 0;
                });
            }
            return {...state, users: arr5};
            
        case 'SET_PAGE':
            return {...state, page: action.page};
            
        case 'PAGE_INCREMENT':
            if(state.page >= state.users.length / 5){
                return state;
            }
            return {...state, page: state.page + 1};
        case 'PAGE_DECREMENT':
            if(state.page === 1){
                return state;
            }
            return {...state, page: state.page - 1};
        default:
            return state;
    }
}


const store = createStore(myUserListR, initialState, applyMiddleware(thunk));
export default store;
