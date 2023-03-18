
export const SELECT_ROOM = "SELECT_ROOM";
export const SELECT_GAME = "SELECT_GAME";
export const LOAD_BET_ITEMS = "LOAD_BET_ITEMS";
export const RESET_BET_ITEMS = "RESET_BET_ITEMS";
export const ADD_BET_ITEMS = "ADD_BET_ITEMS";
export const NEW_REPORT = "NEW_REPORT";
export const RESET_REPORT = "RESET_REPORT";

export const loadBetItemAction = (gameDetailId, items) => ({type: LOAD_BET_ITEMS, payload: {gameDetailId, items}})
export const resetBetItemAction = (gameDetailId) => ({type: RESET_BET_ITEMS, payload: gameDetailId})
export const addBetItemAction = (gameDetailId, items) => ({type: ADD_BET_ITEMS, payload: {gameDetailId, items}})
export const selectRoomAction = (room) => ({type: SELECT_ROOM, payload: room})
export const selectGameAction = (game) => ({type: SELECT_GAME, payload: game})
