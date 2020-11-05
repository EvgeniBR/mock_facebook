import axios from 'axios';



export default axios.create({
  baseURL: process.env.NODE_ENV === "production" ? `https://mock-facebook.herokuapp.com/` : `http://localhost:7000/`,
});