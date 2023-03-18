import {
    LOADING_TOGGLE_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGIN_FAILED_ACTION,
    LOGOUT_ACTION,
    UPDATE_FINANCIAL_USER,
    UPDATE_USER,
} from '../actions/AuthActions';

const initialState = {
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function AuthReducer(state = initialState, action) {

    if(action.type === UPDATE_FINANCIAL_USER) {
        return {
            ...state,
            user: {
                ...state.user,
                points: action.payload?.points,
                totalBetAmount: action.payload.totalBetAmount,
                rebateAmount: action.payload.rebateAmount,
                resultAmountForOpen: action.payload.resultAmountForOpen,
                resultAmountForToday: action.payload.resultAmountForToday,
            }
        }
    }

    if(action.type ===  UPDATE_USER) {
        return {
            ...state,
            user: action.payload
        }
    }
    
    if (action.type === LOGIN_CONFIRMED_ACTION) {
        return {
            ...state,
            token: action.payload.token,
            user: action.payload.data,
            errorMessage: '',
            successMessage: 'Login Successfully Completed',
            showLoading: false,
        };
    }

    if (action.type === LOGOUT_ACTION) {
        return {
            ...state,
            errorMessage: '',
            successMessage: '',
            token: null,
            user: null
        };
    }

    if (
        action.type === LOGIN_FAILED_ACTION
    ) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            showLoading: false,
        };
    }

    if (action.type === LOADING_TOGGLE_ACTION) {
        return {
            ...state,
            showLoading: action.payload,
        };
    }
    return state;
}

    
