import axios from 'axios';
import swal from "sweetalert";
import { BACKEND_LINK } from '../config';
import {
    loginConfirmedAction,
    logout
} from '../store/actions/AuthActions';

export function signin(email, password) {

    const postData = {
        email,
        password,
    };

    return axios.post(
        `${BACKEND_LINK}/api/auth/signin`,
        postData,
    );
}



export function formatError(errorResponse) {
    
    if (errorResponse.includes('EMAIL_EXISTS')) {
        swal("Oops", "Email already exists", "error");
        return;
    } else if (errorResponse.includes('USERNAME_EXISTS')) {
        swal("Oops", "User name already exists", "error");
        return;
    } else if (errorResponse.includes('EMAIL_NOT_EXISTS')) {
        swal("Oops", "Email not found", "error", { button: "Try Again!", });
        return;
    } else if (errorResponse.includes('INVALID_PASSWORD')) {
        swal("Oops", "Invalid Password", "error", { button: "Try Again!", });
        return;
    } else {
        swal("Oops", "Has something wrong", "error", { button: "Try Again!", });
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    var token = {
        token: tokenDetails.token,
        expiresIn: new Date(
            new Date().getTime() + tokenDetails.expiresIn,
        ),
        data: tokenDetails.data
    }
    localStorage.setItem('freshauser-detail', JSON.stringify(token));
}

export function removeTokenInLocalStorage() {
    localStorage.removeItem("fresharoom");
    localStorage.removeItem("freshauser-detail");
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkToken() {
    const tokenDetailsString = localStorage.getItem('freshauser-detail');
    if(tokenDetailsString) {
        return true;
    }else {
        return false;
    }
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('freshauser-detail');
    let tokenDetails = '';

    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    if(!tokenDetails?.data?.userDetailId) {
        dispatch(logout(history));
        return;
    }
    let expireDate = new Date(tokenDetails.expiresIn);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}

export function existToken() {
    const tokenDetailsString = localStorage.getItem('freshauser-detail');

    if (!tokenDetailsString) {
        return false;
    }else return true;

}