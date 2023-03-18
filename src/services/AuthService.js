import axios from 'axios';
import swal from "sweetalert";
import { backendLink, ROLE_TYPE_AGENCY, ROLE_TYPE_ROOM_MEMBER } from '../config';
import {
    loginConfirmedAction,
    logout
} from '../store/actions/AuthActions';
import { selectGameAction, selectRoomAction } from '../store/actions/BettingActions';

export function signin(name, password, browser,  device) {

    const postData = {
        name,
        password,
        roles: `${ROLE_TYPE_AGENCY}-${ROLE_TYPE_ROOM_MEMBER}`,
        browser,
        device
    };

    return axios.post(
        `${backendLink}/auth/signin/super-admin`,
        postData,
    );
}


export function formatError(errorResponse) {
    
    if (errorResponse.includes('EMAIL_EXISTS')) {
        swal("Oops", "账户已存在!", "error");
        return;
    } else if (errorResponse.includes('USERNAME_EXISTS')) {
        swal("Oops", "此用户名已存在！", "error");
        return;
    } else if (errorResponse.includes('EMAIL_NOT_EXISTS')) {
        swal("Oops", "找不到帐户", "error", { button: "再试一次！", });
        return;
    } else if (errorResponse.includes('INVALID_PASSWORD')) {
        swal("Oops", "无效的密码", "error", { button: "再试一次！", });
        return;
    }else if (errorResponse.includes('ROLE_NOT_EXISTS')) {
        swal("Oops", "角色不存在", "error");
        return;
    }else if (errorResponse.includes('Wallet')) {
        swal("Oops", "Go to wallet connect", "error");
        return;
    }else {
        swal("Oops", "有问题", "error", { button: "再试一次！", });
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    var token = {
        token: tokenDetails.token.token,
        expiresIn: new Date(
            new Date().getTime() + tokenDetails.token.expiresIn,
        ),
        data: tokenDetails.data
    }
    localStorage.setItem('lottery-user-detail', JSON.stringify(token));
}

export function removeTokenInLocalStorage() {
    localStorage.removeItem("lottery-room");
    localStorage.removeItem("lottery-user-detail");
}

export function saveRoomInLocalStorage(room) {
    localStorage.setItem('lottery-room', JSON.stringify(room));
}

export function saveGameInLocalStorage(game) {
    localStorage.setItem('lottery-game', JSON.stringify(game));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkToken() {
    const tokenDetailsString = localStorage.getItem('lottery-user-detail');
    if(tokenDetailsString) {
        return true;
    }else {
        return false;
    }
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('lottery-user-detail');
    let tokenDetails = '';

    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    const curRoom = localStorage.getItem('lottery-room');
    if(curRoom) {
        dispatch(selectRoomAction(JSON.parse(curRoom)))
    }

    const curGame = localStorage.getItem('lottery-game');
    if(curGame) {
        dispatch(selectGameAction(JSON.parse(curGame)))
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
    const tokenDetailsString = localStorage.getItem('lottery-user-detail');

    if (!tokenDetailsString) {
        return false;
    }else return true;

}