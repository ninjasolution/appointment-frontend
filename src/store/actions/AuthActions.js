import {
    formatError,
    saveTokenInLocalStorage,
    signin,
} from '../../services/AuthService';

export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const UPDATE_USER = "UPDATE_USER";
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const UPDATE_FINANCIAL_USER = 'UPDATE_FINANCIAL_USER';


export function logout(navigate) {

    // removeTokenInLocalStorage();
    navigate("/login")
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(name, password, navigation) {
    return (dispatch) => {
        signin(name, password)
            .then((response) => {
                saveTokenInLocalStorage(response.data);
                dispatch(loginConfirmedAction(response.data));

                navigation("/")
            })
            .catch((error) => {
                const errorMessage = formatError(error.toString());
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}


export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}


export function updateUserActioin(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function updateUserFinancialAction(data) {
    return {
        type: UPDATE_FINANCIAL_USER,
        payload: data
    }
}
