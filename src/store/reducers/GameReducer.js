import { NEW_GAME } from "../actions/GameActions";
import { LOAD_GAMES_DETAILS } from "../actions/MessageActions";

const initialState = {
    openGames: [],
    games: []
};

export default function GameReducer(state = initialState, actions) {

    if (actions.type === NEW_GAME) {
        
        return {
            ...state,
            openGames: {
                ...state.openGames,
                [actions.payload.detail.gameDetailId]: actions.payload
            }
        };
    }else if (actions.type === LOAD_GAMES_DETAILS) {
        
        return {
            ...state,
            games: actions.payload
        };
    }

    return state;
}
