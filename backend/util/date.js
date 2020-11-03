

const date = new Date();

const getCurrentTime = () => {

}

const getCurrentDate = () => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear()
    return `${day < 10 ? `0${day}` : `${day}`}${month < 10 ? `0${month}` : `${month}`}${year}`
}

console.log(getCurrentDate());


module.exports = {
    getCurrentTime,
    getCurrentDate,
}