import { ADD_SERVER_COUNTER } from "../actions/ServerCounter"

const initialState = {
    server_counter: 0,
}

export default function ServerCounterReducer(state = initialState, actions) {
    if(actions.type === ADD_SERVER_COUNTER) {
        return {
            serverTime: actions.payload
        }
    } else {
        return state
    }
}