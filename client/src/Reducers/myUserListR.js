//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    users: [],
    page: 1,
  };
//reducer

export const myUserListR =(state = initialState, action)=>{
    switch(action.type){       
        case 'GET_ALL':
            console.log(action.data)
            return {...state, users: action.data};

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
