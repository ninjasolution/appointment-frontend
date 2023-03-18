export const ADD_TRANSACTION = "NEW_TRANSACTION";
export const LOAD_TRANSACTION = "LOAD_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";

export const addTrxAction = trx => ({ type: ADD_TRANSACTION, payload: trx })
export const loadTrxAction = trxes => ({ type: LOAD_TRANSACTION, payload: trxes })
export const removeTrxAction = id => ({ type: REMOVE_TRANSACTION, payload: id })
