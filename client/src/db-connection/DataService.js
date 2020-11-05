import http from "./PathConnect";


const get = (path) => {
  return http.get(`/${path}`);
}

//create or update new sheet 
const create = (path,data)  => {
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