const INITIAL_STATE = false;

function infoModalReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_INFO':
            return { ...action, status: action.payload }
        case 'HIDE_INFO':
            return { ...action, status: action.payload }
        default:
            return state;
    }
}

export default infoModalReducer;