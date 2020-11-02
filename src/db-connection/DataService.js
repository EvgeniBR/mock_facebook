import http from "./PathConnect";


const get = (id) => {
  return http.get(`/${id}`);
}

//create or update new sheet 
const create = (data,path)  => {
  return http.post(`/${path}`, data);
};

const update = (id, data) => {
  return http.put(`${id}`, data);
};

const remove = id => {
  return http.delete(`/${id}`);
};


export default {
  get,
  create,
  update,
  remove,
};