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
    deleteUserCompleted: false,
  };
  
//reducer
export const myUserListR =(state = initialState, action)=>{
    switch(action.type){ 
        case 'DELETE_USER':
            return {...state, users: state.users.filter(user=>user._id !== action.index)}      
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
        case 'DELETEUSER_COMPLETED':
            return {...state, deleteUserCompleted: action.val}
        case 'SET_SORT':
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
                    if (nameA < nameB) {
                    return -1;
                    }
                    if (nameA > nameB) {
                    return 1;
                    }
                    return 0;
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


export default myUserListR;
