export const ADD_SERVER_COUNTER = "ADD_SERVER_COUNTER";


export const addServerCounter = (timeNOw) => ({
    type: ADD_SERVER_COUNTER,
    payload: timeNOw,
})