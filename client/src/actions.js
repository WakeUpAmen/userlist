import axios from 'axios';
export function getAllUsersFromServer(url) {
    return (dispatch) => {
        console.log("action get allllll")
        axios.get(url)
        .then(response => {
            console.log("action get all success")
            console.log("response:"+response.data);
            dispatch(getAll(response.data));
        })
        .catch(err => {
            console.log("action get all fail")
            console.log(err);
            window.alert("error");
        });
    }
}

export function getOneUserById(url, id) {
    return (dispatch) => {
        axios.get(url, {
            id: id
        })
        .then((response) => {
            console.log("reduce get user by id")
            console.log(response.data);
            dispatch(getUserById(response.data));
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
        })
        .catch(err => {
            console.log(err);
            window.alert("error");
        });
    }
}

export const setSort ={
    type: 'SET_SORT',  
    str:""
};
export const setFilterText =text=>({
    type: 'SET_FILTERTEXT', 
    text
});
export const setPage=page=>({
    type: 'SET_PAGE', 
    page
});
export const getUserById = userinfo =>({
    type: 'GETUSER_BYID',
    userinfo
})
export const setFirstNameOnChange= (text) =>({
    type: 'SET_FIRSTNAMEONCHANGE',
    text
})
export const setLastNameOnChange= (text) =>({
    type: 'SET_LASTNAMEONCHANGE',
    text
})
export const setSexOnChange= (text) =>({
    type: 'SET_SEXONCHANGE',
    text
})
export const setAgeOnChange= (text) =>({
    type: 'SET_AGEONCHANGE',
    text
})
export const setPwdOnChange= (text) =>({
    type: 'SET_PWDONCHANGE',
    text
})
export const pageIncrement={
    type: 'PAGE_INCREMENT'
};
export const pageDecrement={
    type: 'PAGE_DECREMENT'
};

export const getAll = data => ({
    type: 'GET_ALL', 
    data
});