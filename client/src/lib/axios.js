import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const getAxios = async (url) => {
  return await axios.get(url).then(response => response.data)
}

export const postAxios = async (url, data) => {
  return await axios.post(url, data)
}