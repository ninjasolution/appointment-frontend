import { CREATE_PRIVATE_MSG, CREATE_PUBLIC_MSG, LOAD_PRIVATE_MSG, LOAD_PUBLIC_MSG, LOAD_USER_LIST, REMOVE_LAST_MESSAGE, REMOVE_PRIVATE_MSG, REMOVE_PUBLIC_MSG, SELECT_USER } from "../actions/MessageActions";

const initialState = {
    privates: [],
    publics: [],
    notifications: [],
    users: [],
    recipient: {}
};

export default function MessageReducer(state = initialState, actions) {


    if (actions.type === CREATE_PUBLIC_MSG) {

        return {
            ...state,
            publics: [actions.payload, ...state.publics]
        };
    } else if (actions.type === REMOVE_LAST_MESSAGE) {
        const lastMessageIndex = state.publics.findLastIndex(m => m?.sender?.name === actions.payload);
        state.publics.splice(lastMessageIndex, 1)
        if (lastMessageIndex > -1) {
            return {
                ...state,
                publics: state.publics
            }
        } else {
            return state
        }

    }

    else if (actions.type === LOAD_PUBLIC_MSG) {

        return {
            ...state,
            publics: actions.payload
        };
    } else if (actions.type === LOAD_PRIVATE_MSG) {

        return {
            ...state,
            privates: actions.payload
        };
    } else if (actions.type === CREATE_PRIVATE_MSG) {
        const recipient = state.recipient;
        if (recipient.name !== actions.payload.sender.name && !actions.payload.recipient) return state;
        return {
            ...state,
            privates: [actions.payload, ...state.privates]
        };
    } else if (actions.type === REMOVE_PUBLIC_MSG) {
        const newMsgs = state.publics.filter(m => m.id !== actions.payload.id)
        return {
            ...state,
            publics: newMsgs
        };
    } else if (actions.type === REMOVE_PRIVATE_MSG) {
        const newMsgs = state.privates.filter(m => m.id !== actions.payload.id)
        return {
            ...state,
            privates: newMsgs
        };
    } else if (actions.type === LOAD_USER_LIST) {

        return {
            ...state,
            users: actions.payload
        };
    } else if (actions.type === SELECT_USER) {

        return {
            ...state,
            recipient: actions.payload
        };
    }
    return state;
}
