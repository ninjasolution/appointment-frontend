export const formatDate = time => {
    const _date = new Date(time)
    return `${_date.getDate()}/${_date.getMonth() + 1}/${_date.getFullYear()}`
}