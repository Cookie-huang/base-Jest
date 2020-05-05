import axios from "axios";

export const getData = () => {
  return axios.get("/");
};

export const getNumber = () => {
  return 123;
};
