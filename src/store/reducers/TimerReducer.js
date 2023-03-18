import { SET_TIMER_ACTION } from "../actions/TimerAction"

const initialState = {
    timer: 0,
}

export default function TimerReducer(state = initialState, actions) {
    if(actions.type === SET_TIMER_ACTION) {
        return {
            timer: actions.payload
        }
    } else {
        return state
    }
}