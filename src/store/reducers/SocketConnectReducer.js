import { SOCKET_CONNECT_ACTION } from "../actions/ScoketConnectAction"
import { SET_TIMER_ACTION } from "../actions/TimerAction"

const initialState = {
    connected: true,
}

export default function SocketConnectReducer(state = initialState, actions) {
    if(actions.type === SOCKET_CONNECT_ACTION) {
        return {
            connected: actions.payload
        }
    } else {
        return state
    }
}