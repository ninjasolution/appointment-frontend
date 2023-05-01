import { SELECT_CATEGORY_TYPE, SETUP_USER } from "../actions/GlobalAction"
import { SET_IS_LOADING, SET_SIDE_BAR } from "../actions/GlobalAction"

const initialState = {
    sidebar: 0,
    isLoading: false,
    setupUser: {},
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
    } else {
        return state
    }
}