//1 create state
// 1. create state, action, reducer
import axios from 'axios';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    page: 1
  };
//reducer

export const pagesR =(state = initialState, action)=>{
    switch(action.type){
            
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


export default pagesR;
