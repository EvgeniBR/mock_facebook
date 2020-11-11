
const d = new Date()

const monthsList = {
  1:"January",
  2:"	February",
  3:"March",
  4:"April",
  5:"May",
  6:"June",
  7:"July",
  8:"August",
  9:"September",
  10:"October",
  11:"November",
  12:"December"
}

//TO-DO BACKEND - fix the schema not with +2 hours for now - add +2 to the front end. 
const calcTimePassHour = (timeNow , timePostPublish) =>{
  if(timeNow < timePostPublish){
    return 24 - timePostPublish + timeNow;
  }
  else{
    return timeNow - timePostPublish;
  }
}


const calcTimePassMinute = (timeNow , timePostPublish) =>{
  if(timeNow < timePostPublish){
    return 60 - timePostPublish + timeNow;
  }
  else{
    return timeNow - timePostPublish;
  }
}

const getMinutesPass = (minutes) => {
  return {date:`${calcTimePassMinute(d.getMinutes(),minutes)} minutes`};
}

const getHoursPass = (time) => {
  const hour = parseInt(time[0])+2;
  const minute = parseInt(time[1]);
  if(d.getHours() === hour){
    return getMinutesPass(minute);
  }
  else{
    return {date:`${calcTimePassHour(d.getHours(),hour)} hours`};
  }
}

const getWeeksPass = (day,time) => {
  if(d.getDay() - day > 7){
    return {date:`${parseInt(day/7)} weeks`};
  }
  else if(d.getDay() - day <= 7 && d.getDay() - day >= 1){
    return {date:`${d.getDay() - day} days`};
  }
  else{
    return getHoursPass(time);
  }
}

const getYearsPass = (date , time) => {
  const splitDate = date.split('-');
  const splitTime = time.split(':');
  const day = parseInt(splitDate[2]);
  const year = parseInt(splitDate[0]);
  if(d.getFullYear() === year){
    return getWeeksPass(day,splitTime);
  }
  return {date:`${d.getFullYear() - year} years`};
}

//return 
const getDateAgo = (date , time) =>{
  const splitDate = date.split('-');
  const splitTime = time.split(':');
  const day = parseInt(splitDate[2]);
  const month = parseInt(splitDate[1]);
  const year = parseInt(splitDate[0]);
  //if pass more than 1 day - show all date
  if(d.getDay() === day && d.getMonth()+1 === month && d.getFullYear() === year){
    return getHoursPass(splitTime);
  }
  else{
    return {date:`${day} ${monthsList[month]} ${year}`}
  }
}

const getPostTime = time => {
  const splitedTime = time.split(/[T|Z]/);
  return getDateAgo(splitedTime[0] , splitedTime[1]);
};

const getCommentTime = time => {
  const splitedTime = time.split(/[T|Z]/);
  return getYearsPass(splitedTime[0] , splitedTime[1]);
}


export default {
  getPostTime,
  getCommentTime,
};