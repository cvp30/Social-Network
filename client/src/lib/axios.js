import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const getAxios = async (url) => {
  return await axios.get(url).then(res => res.data);
}

export const postAxios = async (url, data) => {
  return await axios.post(url, data)
}