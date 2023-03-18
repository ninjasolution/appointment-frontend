import { saveGameInLocalStorage, saveRoomInLocalStorage } from "../../services/AuthService";
import { ADD_BET_ITEMS, LOAD_BET_ITEMS, NEW_REPORT, RESET_BET_ITEMS, RESET_REPORT, SELECT_GAME, SELECT_ROOM } from "../actions/BettingActions";

const initialState = {
    curRoom: {},
    curGame: {},
    items: {},
    reports: {}
};

export default function BettingReducer(state = initialState, actions) {

    if (actions.type === LOAD_BET_ITEMS) {
        return {
            ...state,
            items: {
                ...state.items,
                [actions.payload.gameDetailId] : actions.payload.items
            },
        };
    }else if (actions.type === NEW_REPORT) {
        return {
            ...state,
            reports: {
                ...state.items,
                [actions.payload.gameDetailId] : actions.payload.reports
            },
        };
    }else if (actions.type === RESET_REPORT) {
        return {
            ...state,
            reports: {
                ...state.items,
                [actions.payload.gameDetailId] : []
            },
        };
    } else if (actions.type === ADD_BET_ITEMS) {
        return {
            ...state,
            items: {
                ...state.items,
                [actions.payload.gameDetailId] : [...state.items[actions.payload.gameDetailId], ...actions.payload.items]
            },
        };
    } else if (actions.type === RESET_BET_ITEMS) {
        return {
            ...state,
            items: {
                ...state.items,
                [actions.payload] : []
            },
        };
    } else if (actions.type === SELECT_ROOM) {
        saveRoomInLocalStorage(actions.payload)
        return {
            ...state,
            curRoom: actions.payload,
        };
    }else if (actions.type === SELECT_GAME) {
        saveGameInLocalStorage(actions.payload)
        return {
            ...state,
            curGame: actions.payload,
        };
    }
    return state;
}
