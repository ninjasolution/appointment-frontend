import { A_Z, N0_9 } from "../config";

export const formatDate = time => {
    const _date = new Date(time)
    return `${_date.getDate()}/${_date.getMonth() + 1}/${_date.getFullYear()}`
}

export const getLogo = (firstName, lastName) => {
    let _first = "";
    let _last = "";
    if(firstName) {
        _first = firstName[0].toUpperCase();
    }
    if(lastName) {
        _last = lastName[0].toUpperCase();
    }
    return `${_first}${_last}`;
}

export const generateSku = () => {
    let sku = "";
    for(let i=0 ; i<3 ; i++) {
        sku += A_Z[getRndInteger(0, 27)]
    }

    sku += "-"
    for(let i=0 ; i<5 ; i++) {
        sku += N0_9[getRndInteger(0, 9)]
    }

    return sku;
}

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}