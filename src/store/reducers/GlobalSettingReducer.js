import { SELECT_CATEGORY_TYPE, SELECT_CLIENT, SETUP_USER, SET_DETAIL_MODAL_STATE, SET_INFO_MODAL_STATE } from "../actions/GlobalAction"
import { SET_IS_LOADING, SET_SIDE_BAR } from "../actions/GlobalAction"

const initialState = {
    sidebar: 0,
    isLoading: false,
    setupUser: {},
    selectedUser: {},
    selectedCategoryType: 0,
    infoModalState: false,
    detailModalState: false
}

export default function GlobalSettingReducer(state = initialState, actions) {
    if(actions.type === SET_SIDE_BAR) {
        return {
            ...state,
            sidebar: actions.payload,
        }
    } else if(actions.type === SET_IS_LOADING) {
        return {
            ...state,
            isLoading: actions.payload
        }
    } else if(actions.type === SETUP_USER) {
        return {
            ...state,
            setupUser: actions.payload
        }
    } else if(actions.type === SELECT_CATEGORY_TYPE) {
        return {
            ...state,
            selectedCategoryType: actions.payload
        }
    } else if(actions.type === SELECT_CLIENT) {
        return {
            ...state,
            selectedUser: actions.payload
        }
    } else if(actions.type === SET_DETAIL_MODAL_STATE) {
        return {
            ...state,
            detailModalState: actions.payload
        }
    } else if(actions.type === SET_INFO_MODAL_STATE) {
        return {
            ...state,
            infoModalState: actions.payload
        }
    } else {
        return state
    }
}