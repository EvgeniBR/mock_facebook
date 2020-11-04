

const date = new Date();

//get time hhmm
const getCurrentTime = () => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour < 10 ? `0${hour}` : `${hour}`}${minute < 10 ? `0${minute}` : `${minute}`}`
}

//get date now format -> ddmmyyyy
const getCurrentDate = () => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear()
    return `${day < 10 ? `0${day}` : `${day}`}${month < 10 ? `0${month}` : `${month}`}${year}`
}

const getFullDate = () => {
    return `${getCurrentDate()} ${getCurrentTime()}`
}

module.exports = {
    getCurrentTime,
    getCurrentDate,
    getFullDate,
}