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