import { ADD_TRANSACTION, LOAD_TRANSACTION, REMOVE_TRANSACTION } from "../actions/TransactionActions";

const initialState = {
    transactions: [],
};

export default function TransactionReducer(state = initialState, actions) {

    if (actions.type === LOAD_TRANSACTION) {
        
        return {
            ...state,
            transactions: actions.payload
        };
    } else if (actions.type === ADD_TRANSACTION) {
        
        return {
            ...state,
            transactions: [...state.transactions, actions.payload]
        };
    } else if (actions.type === REMOVE_TRANSACTION) {
        
        return {
            ...state,
            transactions: state.transactions.filter(t => t.tranId !== actions.payload)
        };
    }

    return state;
}
