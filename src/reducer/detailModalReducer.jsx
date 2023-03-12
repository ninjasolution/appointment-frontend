const INITIAL_STATE = false;

function detailModalReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_DETAIL':
            return { ...state, status: action.payload }
        case 'HIDE_DETAIL':
            return { ...state, status: action.payload }
        default:
            return state;
    }
}

export default detailModalReducer;