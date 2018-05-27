import axios from 'axios';
//async functions
export function getAllUsersFromServer() {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.get("http://localhost:8888/api/userlist/")
        .then(response => {
            dispatch(getAll(response.data));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(getDataError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function getOneUserById(id) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.get("http://localhost:8888/api/userlist/"+id, {
            id: id
        })
        .then((response) => {
            console.log("get user by id")
            console.log(response.data)
            dispatch(getUserById(response.data));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(getDataError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function addOneToServer(userdata) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        dispatch(newUserCompleted(true));
        axios.post("http://localhost:8888/api/userlist/", {
            firstname: userdata.firstname,
            lastname: userdata.lastname,
            sex: userdata.sex,
            age: userdata.age,
            pwd: userdata.pwd,
        })
        .then((response) => {
            dispatch(newUserCompleted(false));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(getDataError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function updateOneToServer(id, userdata) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        dispatch(editUserCompleted(true));
        axios.put("http://localhost:8888/api/userlist/"+id, {
            _id : userdata._id,
            firstname: userdata.firstname,
            lastname: userdata.lastname,
            sex: userdata.sex,
            age: userdata.age,
            pwd: userdata.pwd,
        })
        .then((response) => {
            console.log(response.data);
            dispatch(editUserCompleted(false));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(getDataError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function deleteOneFromServer(id) {
    console.log(id);
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.delete("http://localhost:8888/api/userlist/"+id, {
            id:id,
        })
        .then((response) => {
            console.log(response.data);
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(getDataError(true));
            dispatch(dataLoading(false));
        });
    }
}
// actions
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

export const getDataError = val=>({
    type: 'GETDATA_ERROR',
    val
})

export const dataLoading =val=>({
    type: 'DATA_LOADING',
    val
})
export const editUserCompleted =val=>({
    type: 'EDITUSER_COMPLETED',
    val
})

export const newUserCompleted =val=>({
    type: 'NEWUSER_COMPLETED',
    val
})