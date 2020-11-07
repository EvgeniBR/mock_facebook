
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


//TO-DO function to weeks pass and years pass , test 

const getMinutesPass = (minutes) => {
  return {date:`${d.getMinutes() - minutes} minutes`};
}

const getHoursPass = (time) => {
  const hour = parseInt(time.substring(0, 2));
  const minute = parseInt(time.substring(2, 4));
  if(d.getHours() === hour){
    return getMinutesPass(minute);
  }
  else{
    return {date:`${d.getHours() - hour} hours`};
  }
}

const getWeeksPass = ({day,time}) => {
  if(day > 7){
    return {date:`${parseInt(day/7)} weeks`};
  }
  else if(day <= 7 && day >= 1){
    return {date:`${d.getDay() - day} days`};
  }
  else{
    return getHoursPass(time);
  }
}

const getYearsPass = ({date , time}) => {
  const day = parseInt(date.substring(0, 2));
  const year = parseInt(date.substring(4, 8));
  if(d.getFullYear() === year){
    return getWeeksPass({day,time});
  }
  return {date:`${d.getFullYear() - year} years`};
}

//return 
const getDateAgo = ({date , time}) =>{
  const day = parseInt(date.substring(0, 2));
  const month = parseInt(date.substring(2, 4));
  const year = parseInt(date.substring(4, 8));
  //if pass more than 1 day - show all date
  if(d.getDay() === day && d.getMonth()+1 === month && d.getFullYear() === year){
    return getHoursPass(time);
  }
  else{
    return {date:`${day} ${monthsList[month]} ${year}`}
  }
}

const getPostTime = time => {
  const splitedTime = time.split(' ');
  return getDateAgo({date:splitedTime[0] , time:splitedTime[1]});
};

const getCommentTime = time => {
  const splitedTime = time.split(' ');
  return getYearsPass({date:splitedTime[0] , time:splitedTime[1]});
}


export default {
  getPostTime,
  getCommentTime,
};