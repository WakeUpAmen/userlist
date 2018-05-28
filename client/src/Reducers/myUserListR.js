//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    users: [],
    filteredUsers: [],
    pageUsers: [],
    page: 1,
    hasError: false,
    dataLoading: false,
    editUserCompleted: false,
    newUserCompleted: false,
    deleteUserCompleted: false,
    filterText: '',
  };
  
//reducer
export const myUserListR =(state = initialState, action)=>{
    switch(action.type){ 
        case 'DELETE_USER':
            return {...state, users: state.users.filter(user=>user._id !== action.index) }      
        case 'GET_ALL':
            return {...state, users: action.data, filteredUsers: action.data, pageUsers: action.data.slice(0, 5)};
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
            state.filteredUsers.forEach(element => {
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
            return {...state, filteredUsers: arr5};
        // case 'SET_PAGE':
        //     return {...state, page: action.page};
            
        case 'PAGE_INCREMENT':
            if(state.page >= state.filteredUsers.length / 5){
                return state;
            }
            return {...state, page: state.page + 1, pageUsers: state.filteredUsers.slice((state.page) * 5, (state.page) * 5+5)};
        case 'PAGE_DECREMENT':
            if(state.page === 1){
                return state;
            }
            return {...state, page: state.page - 1, pageUsers: state.filteredUsers.slice((state.page - 2) * 5, (state.page - 2) * 5+5)};
        case 'SET_FILTERTEXT':
            return {...state, filterText: action.text, filteredUsers: state.users.filter(user=>user.firstname.indexOf(action.text) !== -1)};
        case 'GET_PAGEUSERS':
            return {...state, page:action.page, pageUsers: state.filteredUsers.slice((action.page -1) * 5, (action.page-1) * 5+5)}
        default:
            return state;
    }
}


export default myUserListR;
