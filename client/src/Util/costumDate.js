
const d = new Date()

const getDateAgo = (date) =>{
  const day = date.substring(0, 2);
  console.log(day);
}

const getPostTime = time => {
  const splitedTime = time.split(' ')
  getDateAgo(splitedTime[0]);
};



export default {
  getPostTime,
};