//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    users: [],
    page: 1,
    hasError: false,
    dataLoading: false,
    editUserCompleted: false,
    newUserCompleted: false,
  };
  
//reducer
export const myUserListR =(state = initialState, action)=>{
    switch(action.type){       
        case 'GET_ALL':
            return {...state, users: action.data};
        case 'DATA_LOADING':
            return {...state, dataLoading: action.val}
        case 'GETDATA_ERROR':
            return {...state, hasError: action.val};
        case 'EDITUSER_COMPLETED':
            return {...state, editUserCompleted: action.val};
        case 'NEWUSER_COMPLETED':
            return {...state, newUserCompleted: action.val};
        case 'SET_SORT':
            let arr = [];
            state.users.forEach(element => {
                arr.push(element);
            });
            if(action.str === "age"){
                arr.sort((a, b)=> a[action.str]-b[action.str])
            }else{
                arr.sort(function(a, b) {
                    var nameA = a[action.str].toUpperCase(); // ignore upper and lowercase
                    var nameB = b[action.str].toUpperCase(); // ignore upper and lowercase
                    nameA < nameB ? -1: (nameA > nameB? 1: 0)
                });
            }
            return {...state, users: arr};
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


export default myUserListR;
