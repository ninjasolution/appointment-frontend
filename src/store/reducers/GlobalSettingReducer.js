import { SETUP_USER } from "../actions/GlobalAction"
import { SET_IS_LOADING, SET_SIDE_BAR } from "../actions/GlobalAction"

const initialState = {
    sidebar: 0,
    isLoading: false,
    setupUser: {}
}

export default function GlobalSettingReducer(state = initialState, actions) {
    if(actions.type === SET_SIDE_BAR) {
        return {
            sidebar: actions.payload
        }
    } else if(actions.type === SET_IS_LOADING) {
        return {
            isLoading: actions.payload
        }
    } else if(actions.type === SETUP_USER) {
        return {
            setupUser: actions.payload
        }
    } else {
        return state
    }
}