//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    _id: "",firstname:"", lastname :"",sex:"",age:"", pwd:"", page: 1
  };
//reducer

export const editUserR =(state = initialState, action)=>{
    switch(action.type){
        case 'SET_FIRSTNAMEONCHANGE':
            return {...state, firstname: action.text};
        case 'SET_LASTNAMEONCHANGE':
            return {...state, lastname: action.text};
        case 'SET_PWDONCHANGE':
            return {...state, pwd: action.text};
        case 'SET_SEXONCHANGE':
            return {...state, sex: action.text};
        case 'SET_AGEONCHANGE':
            return {...state, age: action.text};
        case 'GETUSER_BYID':
            return {...state, firstname: action.userinfo.firstname, lastname: action.userinfo.lastname, sex: action.userinfo.sex, age: action.userinfo.age}
        default:
            return state;
    }
}


export default editUserR;
